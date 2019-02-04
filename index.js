const express     = require('express');
const fetch       = require('node-fetch');
const bodyParser  = require('body-parser');
const app         = express();
const session     = require('express-session');
const path        = require('path');
const jsonParser  = bodyParser.json({type: 'application/*+json'});
const DB          = require('./config/database');
const graphqlHttp = require('express-graphql');
const helmet   = require('helmet')
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const compression = require('compression');
const morgan = require('morgan');
const fs = require('fs')
const path = require('path')
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(helmet());
app.use(compression());
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {flags: 'a'}
);
app.use(morgan('combined', {stream: accessLogStream}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
  })
)

// app.get('/', (req, res, next) => {
//   // res.json({data: null, message: 'Home middleware', error: 'Not Found'});
//   // next();
//   res.redirect('/admin/user/login');
// });

app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true, //enable this to test on the browser
  formatError(err) {
    if(!err.originalError) {
      return err;
    }
    const data = err.originalError.data;
    const message = err.message || 'An error occurred';
    const code = err.originalError.code || 500;
    return { message: message, status: code, data: data};
  }
}));

app.use((req, res, next) => {
  res.render('404', {docTitle: '404 Error'})
});


app.use((req, res, next) => {
  if(!req.session.user) {
    return next();
  }
  next();
})
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express     = require('express');
const fetch       = require('node-fetch');
const siteRoutes  = require('./routes/site');
const thumbRoutes = require('./routes/thumb');
const apiRoutes   = require('./routes/api');
const login       = require('./routes/login');
const bodyParser  = require('body-parser');
const app         = express();
const session     = require('express-session');
const path        = require('path');
const jsonParser  = bodyParser.json({type: 'application/*+json'});
const DB          = require('./config/database');

app.set('view engine', 'pug');
app.set('views', 'views');
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
app.use('/admin/site', siteRoutes.routes);
app.use('/admin/thumb', thumbRoutes.routes);
app.use('/admin/user', login.routes);
app.use('/api', apiRoutes.routes);

app.get('/', (req, res, next) => {
  // res.json({data: null, message: 'Home middleware', error: 'Not Found'});
  // next();
  res.redirect('/admin/user/login');
});
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

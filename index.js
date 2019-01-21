const express     = require('express');
const fetch       = require('node-fetch');
const siteRoutes  = require('./routes/site');
const thumbRoutes = require('./routes/thumb');
const apiRoutes   = require('./routes/api');
const bodyParser  = require('body-parser');
const app         = express();
const path        = require('path');
const jsonParser  = bodyParser.json({type: 'application/*+json'});
const DB          = require('./config/database');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
  res.json({data: null, message: 'Home middleware', error: 'Not Found'});
});
app.use('/admin/site', siteRoutes.routes);
app.use('/admin/thumb', thumbRoutes.routes);
app.use('/api', apiRoutes.routes);
app.use((req, res, next) => {
  res.render('404', {docTitle: '404 Error'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

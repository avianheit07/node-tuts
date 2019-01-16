const express = require('express');
const fetch = require('node-fetch');
const siteRoutes = require('./routes/site');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const jsonParser = bodyParser.json({type: 'application/*+json'});

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
  res.json({data: null, message: 'Home middleware', error: 'Not Found'});
});
app.use('/admin', siteRoutes.routes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

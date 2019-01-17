const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/site', {target: 'http://localhost:5000/'}))
  app.use(proxy('/api/site/:id', {target: 'http://localhost:5000/'}))
}

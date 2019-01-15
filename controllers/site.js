const sites_json = require('fs');
const path = require('path');
const Site_model = require('../models/site.js');
const sites =[];

exports.getSitelist = (req, res, next) => {
    const site_content = sites_json.readFileSync(__dirname + '/../dummy_data/sites.json');
    res.json({data: JSON.parse(site_content), message: 'success', error: null})
}

exports.getSitelist2 = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'site.html'));
}

exports.addSite = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add_site.html'));
  // res.json({data: null, message: 'Add Site'});
  // const site = new Site(req.body.name);
  //
  // site.save();
}

exports.saveSite = (req, res, next) => {
  // const site = new Site_model(req.body.site);
  const site = req.body.site;

  console.log(req.body.site);
  sites.push({name: site})
  res.send({data: site, message: 'Data saved'});
}

exports.showSites = (req, res, next) => {
  // let sites = Site_model.fetchAll();
  console.log('here', sites);
  res.send({data: sites});
}

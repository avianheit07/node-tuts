const Site_model = require('../models/site.js');

exports.getSitelist = (req, res, next) => {
    const site_content = Site_model.fetchAll();
    res.json({data: site_content, message: 'success', error: null})
}

exports.getSitelist2 = (req, res, next) => {
  const sites = Site_model.fetchAll();
  res.render('site', {props_sites: sites, docTitle: 'Site List', props_active: 'list'})
}

exports.addSite = (req, res, next) => {
  res.render('add_site', {props_active: 'site-new', docTitle: 'Add Site'});
}

exports.saveSite = (req, res, next) => {
  const site = new Site_model(req.body.site);
  site.save();
  res.redirect("/admin/site");
}

exports.editSite = (req, res, next) => {
  const id = req.params.id;
  const sites = Site_model.fetchAll();
  const site = sites.find((s) => {
    if(id === s.id){
      return s;
    }
  }, id)
  res.render('edit_site', {props_sites: site, docTitle: 'Site Edit', props_active: ''})
}
exports.updateSite = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.site;
  Site_model.edit(id, name, () => {
    res.redirect("/admin/site");
  });
}
exports.showSites = (req, res, next) => {
  const sites = Site_model.fetchAll();
  res.send({data: sites});
}

exports.getSite = (req, res, next) => {
  const id = req.params.id;
  const site_content = Site_model.fetchOne(id);
  res.json({data: site_content, message: 'success', error: null})
}

exports.getSiteEdit = (req, res, next) => {
  const name = req.body.name;
  const site = new Site_model(name);
  const id = parseInt(req.params.id);
    console.log('fucker', name)
  site.editOne(id, req.body)
  res.json({data: req.body, message: 'success'})
}

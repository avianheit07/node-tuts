const Site_model = require('../models/site.js');
const Thumbs = require('../models/thumbs.js');

exports.apiList = (req, res, next) => {
    Site_model.fetchAll((result) => {
      res.json({data: result, message: 'success', error: null})
    })
}
exports.apiSite = (req, res, next) => {
  const id = req.params.id;
  Site_model.fetchOne(id, (result) => {
      res.json({data: result, message: 'success', error: null})
  });
}
exports.apiSiteEdit = (req, res, next) => {
  const name = req.body.name;
  const site = new Site_model(name);
  const id = parseInt(req.params.id);
    console.log('fucker', name)
  site.editOne(id, req.body)
  res.json({data: req.body, message: 'success'})
}

exports.getSitelist = (req, res, next) => {
  Site_model.fetchAll( (sites) => {
    res.render('site', {props_sites: sites, docTitle: 'Site List', props_active: 'list'})
  });
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
  Site_model.fetchOne(id, (site) => {
    Thumbs.fetchAllBySite(site.id, (thumbsSite) => {
      res.render('edit_site', {props_sites: site, docTitle: 'Site Edit', props_active: '', props_thumbs: thumbsSite})
    })
  })
}
exports.updateSite = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.site;
  const url = req.body.url;
  Site_model.edit(id, {name: name, url: url}, () => {
    res.redirect("/admin/site");
  });
}
exports.deleteSite = (req, res, next) => {
  const id = req.params.id;
  Site_model.fetchAll( (sites) => {
    const new_sites = sites.filter( (x) => {
      return x.id != id
    });
    Site_model.rewrite(new_sites, () => {
      res.redirect("/admin/site")
    })
  })
}

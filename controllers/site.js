const Sites = require('../models/site.js');
const Thumbs = require('../models/thumbs.js');

exports.apiList = (req, res, next) => {
    Sites.fetchAll()
    .then( results => {
      res.json({data: results[0], message: 'success', error: null})
    })
    .catch( err => {
      res.json({data: [], message: 'failed', error: err})
    })
}
exports.apiSite = (req, res, next) => {
  const id = req.params.id;
  Sites.fetchOne(id, (result) => {
      res.json({data: result, message: 'success', error: null})
  });
}
exports.apiSiteEdit = (req, res, next) => {
  const name = req.body.name;
  const site = new Sites(name);
  const id = parseInt(req.params.id);
    console.log('fucker', name)
  site.editOne(id, req.body)
  res.json({data: req.body, message: 'success'})
}

exports.getSitelist = (req, res, next) => {
  Sites.fetchAll()
  .then( (results) => {
    res.render('site', {props_sites: results[0], docTitle: 'Site List', props_active: 'list'})
  })
  .catch( (err) => {
    console.log(err)
  })
}
exports.addSite = (req, res, next) => {
  res.render('add_site', {props_active: 'site-new', docTitle: 'Add Site'});
}
exports.saveSite = (req, res, next) => {
  const site = new Sites(req.body.site);
  site.save()
  .then( (result) => {
    console.log(result);// {fieldCount, affectedRows, insertId, info, serverStatus, warningStatus}
    res.redirect("/admin/site");
  })
  .catch( err => {
    console.log(err);
  });

}
exports.editSite = (req, res, next) => {
  const id = req.params.id;
  Sites.fetchOne(id)
  .then( (results) => {
    Thumbs.fetchAllBySite(results[0][0].id)
    .then( (thumbs_res) => {
      res.render('edit_site', {props_sites: results[0][0], docTitle: 'Site Edit', props_active: '', props_thumbs: thumbs_res[0]})
    })
    .catch( (err2) => {
      console.log(err2)
    })
  })
  .catch( (err) => {
    console.log(err)
  });
}
exports.updateSite = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.site;
  const url = req.body.url;
  Sites.edit(id, {name: name, url: url})
  .then( () => {
    res.redirect("/admin/site");
  })
  .catch( (err) => {
    res.json(err)
  });

}
exports.deleteSite = (req, res, next) => {
  const id = req.params.id;
  Sites.deleteOne(id)
  .then( () => {
    res.redirect('/admin/site');
  })
  .catch( (err) => {
    res.json(err)
  })
}

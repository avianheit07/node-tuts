import { SiteService } from '../services/site.service';
import { Response, Request } from 'express';
// const Thumbs               = require('../models/thumbs.js');
const { validationResult } = require('express-validator/check');

// exports.apiList = (req, res, next) => {
//     Sites.fetchAll()
//     .then( results => {
//       res.json({data: results[0], message: 'success', error: null})
//     })
//     .catch( err => {
//       res.json({data: [], message: 'failed', error: err})
//     })
// } // get All Sites
// exports.apiSite = (req, res, next) => {
//   const id = req.params.id;
//   Sites.fetchOne(id)
//   .then( (results) => {
//     Thumbs.fetchAllBySite(results[0][0].id)
//     .then( (thumbs_res) => {
//       results[0][0].thumbs = thumbs_res[0];
//       res.json({data: results[0][0], message: 'success', error: null})
//     })
//     .catch( (err2) => {
//       res.json({data: [], message: 'failed', error: err2})
//     })
//   });
// } // get site by id
// exports.apiCreate = (req, res, next) => {
//   const site = new Sites(req.body.site);
//   site.save()
//   .then( (result) => {
//     res.json({data: results[0][0], message: 'success', error: null})
//   })
//   .catch( err => {
//     res.json({data: [], message: 'failed', error: err2})
//   });
//
// }
// exports.apiSaveSite = (req, res, next) => { // save site
//   const id = req.body.id;
//
//   Sites.edit(id, req.body)
//   .then( (results) => {
//     res.json({data: result[0], message: 'success', error: null});
//   })
//   .catch( (err) => {
//     res.json(err)
//   });
// }
// exports.apiSiteDelete = (req, res, next) => {
//   const id = req.params.id;
//   Sites.deleteOne(id)
//   .then( (result) => {
//     res.json({data: result[0], message: 'success', error: null});
//   })
//   .catch( (err) => {
//     res.json({data: [], message: 'failed', error: err});
//   })
// }
exports.getSitelist = (req: Request, res: Response) => {
  SiteService.getSites()
  .then( (results: []) => {
    res.render('site', {props_sites: results, docTitle: 'Site List', props_active: 'list', isAuthenticated: true})
  })
  .catch( (err) => {
    console.log(err)
  })
}
// exports.addSite = (req, res, next) => {
//   res.render('add_site', {props_active: 'site-new', docTitle: 'Add Site', isAuthenticated: req.session.isLoggedIn});
// }
// exports.saveSite = (req, res, next) => {
//   const site = new Sites(req.body.site);
//
//   const errors = validationResult(req);
//   console.log('errors', errors.array());
//   if(!errors.isEmpty()) {
//     return res.status(422).render('add_site', {
//         props_active: 'site-new',
//         docTitle: 'Add Site',
//         errorMessage: errors.array()
//     }) // 422 validation failed
//   }
//   site.save()
//   .then( (result) => {
//     // {fieldCount, affectedRows, insertId, info, serverStatus, warningStatus}
//     res.redirect("/admin/site");
//   })
//   .catch( err => {
//     console.log(err);
//   });
//
// }
// exports.editSite = (req, res, next) => {
//   const id = req.params.id;
//   Sites.fetchOne(id)
//   .then( (results) => {
//     Thumbs.fetchAllBySite(results[0][0].id)
//     .then( (thumbs_res) => {
//       res.render('edit_site', {props_sites: results[0][0], docTitle: 'Site Edit', props_active: '', props_thumbs: thumbs_res[0], isAuthenticated: req.session.isLoggedIn})
//     })
//     .catch( (err2) => {
//       console.log(err2)
//     })
//   })
//   .catch( (err) => {
//     console.log(err)
//   });
// }
// exports.updateSite = (req, res, next) => {
//   const id   = req.body.id;
//   const name = req.body.site;
//   const url  = req.body.url;
//
//   const errors = validationResult(req);
//   console.log('errors', errors.array());
//   if(!errors.isEmpty()) {
//
//     Sites.fetchOne(id)
//     .then( (results) => {
//       Thumbs.fetchAllBySite(results[0][0].id)
//       .then( (thumbs_res) => {
//
//         return res.status(422).render('edit_site', {
//             props_sites: results[0][0],
//             props_active: '',
//             docTitle: 'Site Edit',
//             props_thumbs: thumbs_res[0],
//             errorMessage: errors.array()
//         }) // 422 validation failed
//       })
//       .catch( (err2) => {
//         console.log(err2)
//       })
//     })
//     .catch( (err) => {
//       console.log(err)
//     });
//   } else {
//       Sites.edit(id, {name: name, url: url})
//       .then( () => {
//         res.redirect("/admin/site");
//       })
//       .catch( (err) => {
//         res.json(err)
//       });
//   }
// }
// exports.deleteSite = (req, res, next) => {
//   const id = req.params.id;
//   Sites.deleteOne(id)
//   .then( () => {
//     res.redirect('/admin/site');
//   })
//   .catch( (err) => {
//     res.json(err)
//   })
// }

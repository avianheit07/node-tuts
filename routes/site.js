const express = require('express');
const router  = express.Router();
const sites   = [];
const sitesController = require('../controllers/site.js')

router.get('/site/', sitesController.getSitelist2);
router.get('/site/add', sitesController.addSite);
router.get('/site/edit/:id', sitesController.editSite);
router.post('/site/save', sitesController.saveSite);
router.post('/site/update', sitesController.updateSite);

exports.routes = router;
exports.sites = sites;

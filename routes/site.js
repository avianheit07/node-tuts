const express = require('express');
const router  = express.Router();
const sitesController = require('../controllers/site.js')

router.get('/site', sitesController.getSitelist);
router.get('/site/add', sitesController.addSite);
router.get('/site/edit/:id', sitesController.editSite);
router.post('/site/save', sitesController.saveSite);
router.post('/site/update', sitesController.updateSite);
router.get('/site/delete/:id', sitesController.deleteSite);

exports.routes = router;

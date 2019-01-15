const express = require('express');
const router  = express.Router();
const sites   = [];
const sitesController = require('../controllers/site.js')

router.get('/site', sitesController.getSitelist);
router.get('/site/list', sitesController.getSitelist2);
router.get('/site/show', sitesController.showSites);
router.get('/site/new', sitesController.addSite);
router.post('/site/add', sitesController.saveSite);
module.exports = router;

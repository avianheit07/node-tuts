const express = require('express');
const router  = express.Router();
const sitesController = require('../controllers/site.js')

router.get('/site', sitesController.apiList);
router.get('/site/:id', sitesController.apiSite);
router.post('/site/:id', sitesController.apiSiteEdit);

exports.routes = router;

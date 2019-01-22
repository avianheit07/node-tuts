const express = require('express');
const router  = express.Router();
const sitesController = require('../controllers/site.js')

router.get('/site', sitesController.apiList); // read all
router.get('/site/:id', sitesController.apiSite); //  read one
router.post('/site/:id', sitesController.apiSaveSite); // edit
router.post('/site', sitesController.apiCreate); // create
router.get('/site/delete/:id', sitesController.apiSiteDelete); //delete

exports.routes = router;

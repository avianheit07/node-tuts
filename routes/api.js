const express = require('express');
const router  = express.Router();
const sitesController = require('../controllers/site.js')

router.get('/site', sitesController.getSitelist);
router.get('/site/:id', sitesController.getSite);
router.post('/site/:id', sitesController.getSiteEdit);

exports.routes = router;

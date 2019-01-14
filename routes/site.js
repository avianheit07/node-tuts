const express = require('express');
const router  = express.Router();
const sites   = [];
const sitesController = require('../controllers/site.js')

router.get('/api/site', sitesController.getSitelist);

module.exports = router;

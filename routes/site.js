const express = require('express');
const router  = express.Router();
const sitesController = require('../controllers/site.js')

router.get('/', sitesController.getSitelist);
router.get('/add', sitesController.addSite);
router.get('/edit/:id', sitesController.editSite);
router.post('/save', sitesController.saveSite);
router.post('/update', sitesController.updateSite);
router.get('/delete/:id', sitesController.deleteSite);

exports.routes = router;

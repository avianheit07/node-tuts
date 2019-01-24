const express         = require('express');
const router          = express.Router();
const { check, body }       = require('express-validator/check');
const sitesController = require('../controllers/site.js')

router.get('/', sitesController.getSitelist);
router.get('/add', sitesController.addSite);
router.get('/edit/:id', sitesController.editSite);
router.post('/save',
  check('site')
    .exists({checkNull: true, checkFalsy: true})
    .withMessage('Input is empty!'),
  sitesController.saveSite);
router.post('/update',
    check('url')
      .isURL()
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Input is not Url'),
    body('site')
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Input should not be empty'),
    sitesController.updateSite);
router.get('/delete/:id', sitesController.deleteSite);

exports.routes = router;

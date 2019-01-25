const express         = require('express');
const router          = express.Router();
const { check, body }       = require('express-validator/check');
const sitesController = require('../controllers/site.js')
const isAuth = require('../middleware/isAuth')

router.get('/', isAuth, sitesController.getSitelist);
router.get('/add', isAuth, sitesController.addSite);
router.get('/edit/:id', isAuth, sitesController.editSite);
router.post('/save',
  check('site')
    .exists({checkNull: true, checkFalsy: true})
    .withMessage('Input is empty!'),
  isAuth, sitesController.saveSite);
router.post('/update',
    check('url')
      .isURL()
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Input is not Url'),
    body('site')
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Input should not be empty'),
    isAuth, sitesController.updateSite);
router.get('/delete/:id', isAuth, sitesController.deleteSite);

exports.routes = router;

const express         = require('express');
const router          = express.Router();
const thumbController = require('../controllers/thumb.js')
const isAuth          = require('../middleware/isAuth')

router.get('/add/:siteId', isAuth, thumbController.addThumb);
router.post('/save', isAuth, thumbController.saveThumb);
router.get('/edit/:thumbId', isAuth, thumbController.editThumb);
router.post('/update/:thumbId', isAuth, thumbController.updateThumb);
router.get('/delete/:thumbId', isAuth, thumbController.deleteThumb);
router.get('/all', isAuth, thumbController.showAll);
exports.routes = router;

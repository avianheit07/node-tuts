const express         = require('express');
const router          = express.Router();
const thumbController = require('../controllers/thumb.js')

router.get('/add/:siteId', thumbController.addThumb);
router.post('/save', thumbController.saveThumb);
router.get('/edit/:thumbId', thumbController.editThumb);
router.post('/update/:thumbId', thumbController.updateThumb);
router.get('/all', thumbController.showAll);
exports.routes = router;

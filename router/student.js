const router = require('express').Router();
const auth = require('../utils/auth');
const takesController = require('../controllers/student/takesController');

router.get('/courses', takesController.archiveSections);
router.get('/current-courses', takesController.currentSections);

module.exports = router;

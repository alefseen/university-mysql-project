const router = require('express').Router();
const auth = require('../utils/auth');
const takesController = require('../controllers/student/takesController');

router.get('/courses', takesController.archiveSections);
router.get('/take/courses', takesController.canGivenSections);
router.post('/take', takesController.submitCourses);

module.exports = router;

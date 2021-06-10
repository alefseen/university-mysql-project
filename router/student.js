const router = require('express').Router();
const auth = require('../utils/auth');
const takesController = require('../controllers/student/takesController');

router.get('/courses', takesController.archiveSections);

module.exports = router;

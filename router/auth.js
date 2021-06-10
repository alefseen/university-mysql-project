const router = require('express').Router();
const AuthController = require('../controllers/authcontroller');

router.post('/student', AuthController.studentLogin);
router.post('/instructor', AuthController.instructorLogin);

module.exports = router;

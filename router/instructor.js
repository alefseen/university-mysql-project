const router = require('express').Router();
const auth = require('../utils/auth');
const AuthController = require('../controllers/authcontroller');

router.post('/login', AuthController.studentLogin);

module.exports = router;

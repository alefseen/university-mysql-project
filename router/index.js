const router = require('express').Router();
const auth = require('../utils/auth');

router.use('/user',require('./user'));

module.exports = router;

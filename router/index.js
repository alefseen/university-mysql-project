const router = require('express').Router();
const auth = require('../utils/auth');
const authRouter = require('./auth');
const instructorRouter = require('./instructor');
const studentRouter = require('./student');

router.use('/auth',authRouter);
router.use('/student', auth.isAuthunticated,auth.isStudent,studentRouter);
router.use('/instructor', auth.isAuthunticated,auth.isInstructor,instructorRouter);

module.exports = router;

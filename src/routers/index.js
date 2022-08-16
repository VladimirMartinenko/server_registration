const router = require('express').Router();
const { checkAccessToken } = require('../middlewares/token.mw');
// const userRouter = require('./user.router')
const authRouter = require('./auth.router')
// router.use('/users', userRouter)
router.use('/auth', authRouter);

router.get('/tekt',checkAccessToken, (req, res, next) => {
  res.send({message: 'autorized users only route'});
});

module.exports = router;
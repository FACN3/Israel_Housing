const passport = require('passport');
const router = require('express').Router();
require('../services/passport');
const redirectAfterLogin = require('../controllers/redirectAfterLogin');
const sendUser = require('../controllers/sendUser');
const logout = require('../controllers/logout');
const sendMail = require('../controllers/sendMail');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'), redirectAfterLogin);

router.get('/current_user', sendUser);

router.get('/logout', logout);

router.post('/sendmail', sendMail);

module.exports = router;

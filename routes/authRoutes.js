const passport = require('passport');
const router = require('express').Router();
require('../services/passport');
const redirectAfterLogin = require('../controllers/redirectAfterLogin');
const sendUser = require('../controllers/sendUser');
const logout = require('../controllers/logout');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'), redirectAfterLogin);

router.get('/current_user', sendUser);

router.get('/logout', logout);

module.exports = router;

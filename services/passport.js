const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('env2')('./config.env');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
      } catch (err) {
        return err;
      }

      try {
        const user = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
        }).save();
        done(null, user);
      } catch (err) {
        return err;
      }
    }
  )
);

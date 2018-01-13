var passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

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
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ authId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            authId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });

      console.log("access Token", accessToken);
      console.log("refresh Token", refreshToken);
      console.log("profile", profile);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedinClientID,
      clientSecret: keys.linkedinClientSecret,
      callbackURL: "/auth/linkedin/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ authId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            authId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
      console.log("access Token", accessToken);
      console.log("refresh Token", refreshToken);
      console.log("profile", profile);
    }
  )
);

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const facebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "299719809893-lg1ro2rr0af9i1pvo7a249qa0oaijhh3.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("lll", profile);
      cb(null, profile);
    }
  )
);
passport.use(
  new facebookStrategy(
    {
      clientID:
        "299719809893-lg1ro2rr0af9i1pvo7a249qa0oaijhh3.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/facebook/callback",
      scope: ["profile", "email"],
      profileFields: ["id", "displayName", "photos", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log("lll", profile);
      cb(null, profile);
    }
  )
);

//serialise user_id
passport.serializeUser(function (user, done) {
  done(null, user);
});

//deserialise user_id
passport.deserializeUser(function (user, done) {
  done(null, user);
});

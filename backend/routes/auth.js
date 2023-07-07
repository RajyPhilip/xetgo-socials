const router = require("express").Router();
const passport = require("passport");

//checking url
router.get("/check", (req, res) => {
  console.log("checking ruuu");

  res.status(200).json({
    error: false,
    message: "connecting front and back success",
  });
});

// google routes
router.get("/login/success", (req, res) => {
  console.log("reached login success");
  if (req.user) {
    console.log("login succes user found running");

    res.status(200).json({
      error: false,
      message: "google login Success",
      user: req.user,
    });
  } else {
    console.log("login succes user not  found running");

    res.status(403).json({
      error: true,
      message: "google Not authorized",
    });
  }
});
router.get("/login/failed", (req, res) => {
  console.log("login failed running");

  res.status(401).json({
    error: true,
    message: "google login failure",
  });
});

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
  }),
  (req, res) => {
    console.log("is it working ");
  }
);
router.get(
  "/google",
  passport.authenticate(passport.authenticate("google", ["profile", "email"]))
);

//logout
router.get("/logout", (req, res) => {
  console.log("logout running");
  req.logOut();
  res.redirect("http://localhost:3000/");
});

// facebook routes
router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/sign-in",
    successRedirect: "/home",
  })
);
module.exports = router;

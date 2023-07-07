require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const authRoutes = require("./routes/auth");
const app = express();
const Database = require("./config/mongoose");
//session
const session = require("express-session");
const MongoStore = require("connect-mongo");

app.use(
  session({
    secret: "habiti",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 1000,
    },
  })
);
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["test"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.options("*", cors());
const port = process.env.PORT || 8080;
app.use("/", authRoutes);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

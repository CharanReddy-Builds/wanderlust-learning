const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {
  renderSignupForm,
  registerUser,
  renderLoginForm,
  logoutUser,
  loginUser,
  redirectAfterLogin,
} = require("../controller/users.js");

router.route("/signup").get(renderSignupForm).post(registerUser);

router
  .route("/login")
  .get(renderLoginForm)
  .post(saveRedirectUrl, loginUser, redirectAfterLogin);

router.get("/logout", logoutUser);

module.exports = router;

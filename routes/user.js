const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignupForm, registerUser, renderLoginForm, logoutUser, loginUser, redirectAfterLogin } = require("../controllers/users.js");

router.get("/signup",renderSignupForm);

router.post("/signup",registerUser);

router.get("/login",renderLoginForm);

router.post(
  "/login",saveRedirectUrl,loginUser,redirectAfterLogin
);

router.get("/logout",logoutUser);

module.exports = router;

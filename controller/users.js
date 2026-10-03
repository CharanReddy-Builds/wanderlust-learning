const User = require("../models/user.js");
const passport = require("passport");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({ email, username });
    let registeredUser = await User.register(newUser, password);
    console.log(registeredUser);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User registered Successfully!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};

module.exports.loginUser = passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
});

module.exports.redirectAfterLogin = (req, res) => {
  let redirectUrl = res.locals.redirectUrl || "/listings";
  req.flash("success", "Welcome back to wanderlust!");
  res.redirect(redirectUrl);
};

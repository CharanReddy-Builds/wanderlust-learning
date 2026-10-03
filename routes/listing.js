const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const ExpressError = require("../ExpressError.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");
const { populate } = require("../models/review.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const {
  renderIndex,
  rendernewListingForm,
  renderListing,
  renderEditForm,
  createListing,
  updateListing,
  deleteListing,
} = require("../controller/listings.js");

router
  .route("/")
  .get(renderIndex)
  .post(isLoggedin, upload.single("image"), createListing);

router.get("/new", isLoggedin, rendernewListingForm);

router
  .route("/:id")
  .get(renderListing)
  .patch(isLoggedin, isOwner,upload.single("image"),updateListing) //already have a validator in controller
  .delete(isLoggedin, isOwner, deleteListing);


router.get("/:id/edit", isLoggedin, isOwner, renderEditForm);

module.exports = router;

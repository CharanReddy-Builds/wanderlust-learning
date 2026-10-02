const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const ExpressError = require("../ExpressError.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");
const { populate } = require("../models/review.js");
const { renderIndex,rendernewListingForm, renderListing, renderEditForm, createListing, updateListing, deleteListing } = require("../controllers/listings.js");

router.get("/",renderIndex);

router.get("/new", isLoggedin,rendernewListingForm);

router.get("/:id",renderListing);

router.get("/:id/edit", isLoggedin, isOwner,renderEditForm);

router.post("/", isLoggedin, validateListing,createListing);

router.patch("/:id", isLoggedin, isOwner, validateListing,updateListing);

router.delete("/:id", isLoggedin, isOwner,deleteListing);

module.exports = router;

const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const ExpressError = require("../ExpressError.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");
const { populate } = require("../models/review.js");

router.get("/", async (req, res) => {
  let listings = await Listing.find({});
  res.render("listings/index.ejs", { listings });
});

router.get("/new", isLoggedin, (req, res) => {
  res.render("listings/new.ejs");
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  console.log(listing);
  if (!listing) {
    throw new ExpressError(404, "No user found!");
  }
  res.render("listings/show.ejs", { listing });
});

router.get("/:id/edit", isLoggedin, isOwner, async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

router.post("/", isLoggedin, validateListing, async (req, res) => {
  let formResponse = req.body;
  req.flash("success", "New Listing Created!");
  formResponse.owner = req.user._id;
  await Listing.insertOne(formResponse);
  res.redirect("/listings");
});

router.patch("/:id", isLoggedin, isOwner, validateListing, async (req, res) => {
  let formResponse = req.body;
  let { id } = req.params;
  await Listing.updateOne({ _id: id }, formResponse, { runValidators: true });
  req.flash("success", "Listing Updated!");
  res.redirect(`${id}`);
});

router.delete("/:id", isLoggedin, isOwner, async (req, res) => {
  let { id } = req.params;
  await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
});

module.exports = router;

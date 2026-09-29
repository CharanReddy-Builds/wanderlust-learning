const express = require("express");
const router = express.Router();
const Listing = require("../models/listing")
const ExpressError = require("../ExpressError.js");
const {listingSchema}=require('../schema.js');

const validateListing=(req,res,next)=>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if (result.error) {
      throw new ExpressError(400, result.error);
    } else{
        next()
    }
}

router.get("/", async (req, res) => {
  let listings = await Listing.find({});
  res.render("listings/index.ejs", {listings});
});

router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id).populate("reviews");
  console.log(listing);
  if (!listing) {
    throw new ExpressError(404, "No user found!");
  }
  res.render("listings/show.ejs", { listing });
});

router.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

router.post("/", validateListing, async (req, res) => {
  let formResponse = req.body;
  req.flash("success","New Listing Created!")
  await Listing.insertOne(formResponse);
  res.redirect("/listings");
});

router.patch("/:id", validateListing, async (req, res) => {
  let formResponse = req.body;
  let { id } = req.params;
  await Listing.updateOne({ _id: id }, formResponse, { runValidators: true });
  req.flash("success", "Listing Updated!");
  res.redirect("/listings");
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
});

module.exports=router
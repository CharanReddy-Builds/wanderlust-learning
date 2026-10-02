const Listing=require("../models/listing.js")
const ExpressError=require("../ExpressError.js")

module.exports.renderIndex = async (req, res) => {
  let listings = await Listing.find({});
  res.render("listings/index.ejs", { listings });
};
module.exports.rendernewListingForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.renderListing=async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  console.log(listing);
  if (!listing) {
    throw new ExpressError(404, "No user found!");
  }
  res.render("listings/show.ejs", { listing });
}

module.exports.renderEditForm=async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}

module.exports.createListing=async (req, res) => {
  let formResponse = req.body;
  req.flash("success", "New Listing Created!");
  formResponse.owner = req.user._id;
  await Listing.insertOne(formResponse);
  res.redirect("/listings");
}

module.exports.updateListing=async (req, res) => {
  let formResponse = req.body;
  let { id } = req.params;
  await Listing.updateOne({ _id: id }, formResponse, { runValidators: true });
  req.flash("success", "Listing Updated!");
  res.redirect(`${id}`);
}

module.exports.deleteListing=async (req, res) => {
  let { id } = req.params;
  await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
}

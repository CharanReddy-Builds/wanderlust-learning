const Listing=require("../models/listing.js")
const ExpressError=require("../ExpressError.js")
const mbxClient = require("@mapbox/mapbox-sdk");
const mbxGeoCoding = require("@mapbox/mapbox-sdk/services/geocoding");
const baseClient = mbxClient({ accessToken:process.env.MAP_KEY });
const geocodingService = mbxGeoCoding(baseClient);
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
  if (!listing) {
    throw new ExpressError(404, "No user found!");
  }
  const mapKey=process.env.MAP_KEY;
  let coordinates=listing.geometry.coordinates;
  if(coordinates.length===0){
    coordinates=[78.03846,15.828638]
  }
  console.log(coordinates)

  res.render("listings/show.ejs", { listing,mapKey,coordinates});
}

module.exports.renderEditForm=async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}

module.exports.createListing=async (req, res) => {
  let formResponse = req.body;
  let listing= new Listing(formResponse)
  req.flash("success", "New Listing Created!");
  listing.owner = req.user._id;
  listing.image.url=req.file.path
  listing.image.filename=req.path.filename
  console.log(formResponse)

  if(listing.geometry){
    let result = await geocodingService
      .forwardGeocode({
        query: `${formResponse.location},${formResponse.country}`,
        limit: 1,
      })
      .send();

      console.log(result.body.features[0].geometry);
      listing.geometry = result.body.features[0].geometry;
  }
    
  await listing.save();
  res.redirect("/listings");
}

module.exports.updateListing=async (req, res) => {
  let formResponse = req.body;
  let { id } = req.params;
  if (req.file) {
    // user selected a new image

       formResponse.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }
//if they change/update location
//this always works even without change
  if (formResponse.location&&formResponse.country) {
    let result = await geocodingService
      .forwardGeocode({
        query: `${formResponse.location},${formResponse.country}`,
        limit: 1,
      })
      .send();

    console.log(result.body.features[0].geometry);
    formResponse.geometry = result.body.features[0].geometry;
  }

  await Listing.updateOne({ _id: id }, {$set:formResponse}, { runValidators: true });
  req.flash("success", "Listing Updated!");
  res.redirect(`${id}`);
}

module.exports.deleteListing=async (req, res) => {
  let { id } = req.params;
  await Listing.findOneAndDelete({ _id: id });
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
}

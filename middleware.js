const Listing = require("./models/listing.js");
const Review=require("./models/review.js")
const { listingSchema,reviewSchema } = require("./schema.js");
const ExpressError = require("./ExpressError.js");


// to check whether if the user is logged in or not
module.exports.isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // if not store initial redirectUrl
    req.session.redirectUrl = req.originalUrl;
    console.log(req.session.redirectUrl);
    req.flash("error", "You must login before doing that.");
    res.redirect("/login");
  } else {
    next();
  }
};

//to save redirectUrl into locals because the login resets session data.
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// to authorise listings for owner only.

module.exports.isOwner = async (req, res, next) => {
  let currUser = res.locals.currUser;
  let { id } = req.params;
  let listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  if (currUser && currUser._id.equals(listing.owner._id)) {
    return next();
  } else {
    req.flash("error", "You are not the owner.");
    return res.redirect(`/listings/${id}`);
  }
};

//to validate Listing against schema rules before operation.

module.exports.validateListing = (req, res, next) => {
  let result = listingSchema.validate(req.body);
  console.log(result);
  if (result.error) {
    throw new ExpressError(400, result.error);
  } else {
    next();
  }
};

// to validate review

module.exports.validateReview = (req, res, next) => {
  let result = reviewSchema.validate(req.body);
  console.log(result);
  if (result.error) {
    throw new ExpressError(400, result.error);
  } else {
    next();
  }
};

// to authorise reviews to delete for author only.

module.exports.isReviewAuthor= async (req,res,next)=>{
    let { id, reviewId } = req.params;
    let review= await Review.findById(reviewId);
    if(!review){
        flash("error","review does not exist.")
        return res.redirect(`/listings/${id}`)
    }
    if(req.user._id.equals(review.author._id)){
        return next()
    }
    req.flash("error","You are not author of this review.")
    return res.redirect(`/listings/${id}`);

}
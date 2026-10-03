const ExpressError = require("../ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
  let formResponse = req.body;
  let { id } = req.params;
  console.log(id);
  console.log(formResponse);
  let review = new Review(formResponse);
  console.log(review);
  //created review object,
  let [listing] = await Listing.find({ _id: id });
  //just saved it and redirected.
  console.log(listing);
  listing.reviews.push(review._id);
  review.author = req.user;
  //curr user who's logged in the author if this review
  await review.save();
  await listing.save();
  req.flash("success", "New Review Created!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.updateOne({ _id: id }, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete({ _id: reviewId });
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};

const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const ExpressError = require("../ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const {
  validateReview,
  isLoggedin,
  isReviewAuthor,
} = require("../middleware.js");
const { createReview, deleteReview } = require("../controller/reviews.js");

router.post("/", isLoggedin, validateReview, createReview);

router.delete("/:reviewId", isLoggedin, isReviewAuthor, deleteReview);

module.exports = router;

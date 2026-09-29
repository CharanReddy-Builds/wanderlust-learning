const express = require("express");
const router = express.Router({mergeParams:true});
const Listing = require("../models/listing")
const ExpressError = require("../ExpressError.js");
const {reviewSchema}=require('../schema.js');
const Review= require('../models/review.js')

const validateReview = (req, res, next) => {
  let result = reviewSchema.validate(req.body);
  console.log(result);
  if (result.error) {
    throw new ExpressError(400, result.error);
  } else {
    next();
  }
};

router.post('/',validateReview, async(req,res)=>{
  let formResponse = req.body;
  let {id}= req.params
  console.log(id)
  console.log(formResponse);
  let review = new Review(formResponse)
  console.log(review)
  //created review object,
  let [listing]= await Listing.find({_id:id})
    //just saved it and redirected.
    console.log(listing)
    listing.reviews.push(review._id)
    await review.save()
    await listing.save()
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${id}`);

})

router.delete('/:reviewId', async (req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.updateOne({_id:id},{$pull:{reviews:reviewId}})
  await Review.findByIdAndDelete({_id:reviewId})
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/${id}`)
})

module.exports=router;
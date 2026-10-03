const mongoose = require("mongoose");
const review = require("./review");
const { type, listingSchema } = require("../schema");
const Review = require("./review.js");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url:{
      type:String
    },
    filename:{
      type:String
    }
    
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: mongoose.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

listSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listSchema);

module.exports = Listing;

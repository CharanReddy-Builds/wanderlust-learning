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
    type: String,
    default:
      "https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
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

const mongoose= require('mongoose')

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    set: (v) =>
      v === ""
        ? Date.now()
        : v,
  },
  author:{
    type:mongoose.ObjectId,
    ref:"User"
  }
});

module.exports=mongoose.model("Review",reviewSchema)

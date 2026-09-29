const mongoose = require("mongoose");
const Sampledata= require("./data.js")
const Listing= require('../models/listing.js')

const initDB = async ()=>{
      await Listing.deleteMany({});
      await Listing.insertMany(Sampledata.data)
      console.log(`data base was reset and data is inserted`)
}

initDB();
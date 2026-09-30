const mongoose = require("mongoose");
const Sampledata= require("./data.js")
const Listing= require('../models/listing.js')
const connectDB=require('../db.js')

const initDB = async ()=>{
      await Listing.deleteMany({});
      Sampledata.data=Sampledata.data.map((obj)=>{return { ...obj, owner:'6aba004b2c70d1808008ab9e'};})
      await Listing.insertMany(Sampledata.data)
      console.log(`data base was reset and data is inserted`)
}
connectDB()
initDB();
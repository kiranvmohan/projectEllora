const mongoose = require("mongoose")

const announceSchema = new mongoose.Schema({

 title:{
    type:String,
    required:true,
    
 },
 category:{
    type:String,
    required:true
 },
 priority:{
    type:String,
    required:true
 },
 message:{
    type:String,
    required:true
 },
 postedAt:{
    type:Date,
    default:Date.now

 }
 
});

module.exports = mongoose.model("announcements",announceSchema);
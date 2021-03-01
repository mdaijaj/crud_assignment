const mongoose=require('../database/db')
// const uniqueValidator = require('mongoose-unique-validator')

let user_schema= new mongoose.Schema({
   firstname: {
      type: String, 
      required:true,
   },
   lastname: {
      type:String,   
      required: true
   },
   rank: {
      type:Number,
      required: true,
   },
   status: {
      type: Boolean,
      required: true
   }
}, {timestamps: true});     


// user_schema.plugin(uniqueValidator)
module.exports= mongoose.model('User_details', user_schema);
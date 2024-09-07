import mongoose from "mongoose";

const courseScheme = new mongoose.Schema({
  
  title : {
    type : String,
    required : true
  },
  desc : {
    type : String,
    required: true
  },
  price : {
    type : Number,
    required: true
  },
  imageUrl : {
    type : String,
    required: true,
    unique: true
  }

});

export const Course = mongoose.model('Course', courseScheme);
import mongoose from "mongoose";

const courseBoughtSchema = new mongoose.Schema({
  
  user_id: {
    type: String,
    required: true
  },
  course_id : {
    type: String,
    required: true
  },
  title : {
    type : String,
  },
  desc : {
    type : String,
  },
  price : {
    type : Number,
  },
  imageUrl : {
    type : String,
    required: true,
  }

});

export const CourseBought = mongoose.model('CourseBought', courseBoughtSchema);
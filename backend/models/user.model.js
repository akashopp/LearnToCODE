import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },

  email : {
    type: String,
    required: true
  },

  phoneNumber : {
    type: Number,
    required: true
  },
  
  password : {
    
    type: String,
    required: true
    
  },

  role : {
    type: String,
    enum: ['admin', 'user'],
    required: true
  },

  // tokens : [
  //   {
  //     token:{
  //       type:String
  //     }
  //   }
  // ]

}, {timestamps : true});

// userSchema.methods.generateAuthtoken = async() => {
  
//   try {

//     console.log(this.name);

//     let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {expiresIn : "1d"});
//     this.tokens = this.tokens.concat({token: token})
//     await this.save();

//     return token;

//   } catch (error) {
//     console.log(error);
//   }
// }



export const User = mongoose.model('User', userSchema);

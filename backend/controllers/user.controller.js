import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const CreateUser = async (req, res) => {

  try {

    const {name, email, phoneNumber, password, role} = req.body;
  
    const flag = await User.findOne({email : email});
  
    if(flag) {  
      return res.status(400).json({
        message: "User aldready exist",
        success: false
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
  
    await User.create({ 
      name,
      email,
      phoneNumber,
      password : hashedPassword,
      role 
    });
  
    return res.status(200).json({
      message: "User registered successfully",
      success: true
    })
    
  } catch (error) {
    console.log(error);
  }

}

export const getUser = async (req, res) => {

  const showUser = await User.find();

  return res.status(200).json({
    showUser
  })

} 

export const findUser = async (req, res) => {

  const {email, password, role} = req.body;

  try {
    
    const user = await User.findOne({email});
    
    if(!user) {
      return res.status(400).json({
        message: "User doesn't exist",
        success: false
      })
    }
    
    const decryptPassword = await bcrypt.compare(password, user.password);

    if(!decryptPassword) {
      return res.status(400).json({
        message: "Incorrect Password",
        success: false
      })
    }
  
    if(role != user.role) {
      return res.status(400).json({
        message: "Role doesn't match",
        success: false
      })
    }

    const userid = user._id.toString();
     
    return res.status(200).json({
      message: "User exist",
      user_id: userid,
      success: true
    })

    
  } catch (error) {
    console.log(error);
  }

} 

export const deleteUser = async(req, res) => {
 
  try {
    
    const id = req.params.id;

    const flag = await User.findById(id);

    if(!flag) {
      return res.status(400).json({
        message: "User not found",
        success: false
      })
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User deleted successfully",
      success: true
    })

  } catch (error) {
    console.log(error);
  }
  
}
import { CourseBought } from "../models/courseBought.model.js";

export const addCourseBought = async (req, res) => {

  try {

    const {user_id, course_id, title, desc, price, imageUrl} = req.body;

    await CourseBought.create({
      user_id, course_id, title, desc, price, imageUrl
    })

    return res.status(200).json({
      message: "Course Bought Added Successfully",
      status: true
    })

  } catch (error) {
    console.log(error); 
  }

}

export const getcourseBought = async (req, res) => {

  try {
    const coursesBought = await CourseBought.find();  
    return res.status(200).json(coursesBought);
  } catch (error) {
    console.log(error)
  }

}

export const getcourseBoughtbyId = async (req, res) => {

  try {
    const id = req.params.id;
    const coursesBought = await CourseBought.find({user_id : id});  
    return res.status(200).json(coursesBought);
  } catch (error) {
    console.log(error)
  }

}

export const isExist = async (req, res) => {

  try {

    const {userid, courseid} = req.params;

    const course = {userid, courseid};

    const response = await CourseBought.exists({
      user_id: userid,
      course_id: courseid
    })

    if(response) {
      return res.status(200).json({
        message: "Course has already bought",
        success: false
      })
    }
    
    return res.status(200).json({
      message: "Course not yet bought",
      success: true
    })

  } catch (error) {
    console.log(error);
  }

}
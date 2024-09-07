import { Course } from "../models/course.model.js";

export const CreateUser = async (req, res) => {

  try {

    const {title, desc, price, imageUrl} = req.body;

    const check = await Course.findOne({imageUrl : imageUrl});

    if(check) {
      return res.status(400).json({
        message: "Course aldready exist",
        success: false
      })
    }

    await Course.create({
      title,
      desc,
      price,
      imageUrl
    })

    return res.status(200).json({
      message: "Course added successfully",
      success: true
    })

  } catch (error) {
    console.log(error);
  }

}

export const getCourse = async (req, res) => {

  try {
    const items = await Course.find();
    
    return res.status(200).json({
      items
    })
    
  } catch (error) {
    console.log(error);
  }

}

export const getCoursebyId = async (req, res) => {

  try {

    const id = req.params.id;

    const items = await Course.findById({_id : id});
    
    return res.status(200).json(items)
    
  } catch (error) {
    console.log(error);
  }

}

export const deleteCourse = async (req, res) => {

  try {

    const id = req.params.id;

    await Course.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Deleted Successfully",
      success: true
    })    

  } catch (error) {
    console.log(error);
  }

}

export const updateCourse = async (req, res) => {

  const id = req.params.id;
  const {title, desc, price, imageUrl} = req.body;

  const newCourse = {title, desc, price, imageUrl};

  try {

    await Course.findByIdAndUpdate(id, newCourse, {new : true});

    return res.status(200).json({
      message: "Course Updated Successfully",
      newCourse,
      success: true
    })

  } catch (error) {
    console.log(error);
  }

}
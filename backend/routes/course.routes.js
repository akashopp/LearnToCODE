import { CreateUser, deleteCourse, getCoursebyId, updateCourse } from "../controllers/course.controller.js";
import { getCourse } from "../controllers/course.controller.js";
import express from "express";

const router = express.Router();

router.route("/createcourse").post(CreateUser);
router.route("/getcourse").get(getCourse);
router.route("/getcourse/:id").get(getCoursebyId);
router.route("/deletecourse/:id").delete(deleteCourse);
router.route("/updatecourse/:id").patch(updateCourse);

export default router;
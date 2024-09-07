import express from "express";
import { addCourseBought, getcourseBought, isExist, getcourseBoughtbyId } from "../controllers/courseBought.controller.js";

const router = express.Router();

router.route("/addcoursebought").post(addCourseBought);
router.route("/getcoursebought").get(getcourseBought)
router.route("/exist/:userid/:courseid").get(isExist)
router.route("/getcoursebyid/:id").get(getcourseBoughtbyId)

export default router;
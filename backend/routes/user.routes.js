import express from "express";
import { CreateUser, getUser, deleteUser, findUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(CreateUser);
router.route("/getuser").get(getUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/finduser").post(findUser);

export default router;
import express from "express";
const app = express();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js"
import courseRoutes from "./routes/course.routes.js";
import courseBoughtRoutes from "./routes/courseBought.routes.js"

import bodyParser from "body-parser";
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(cors());
app.use("/course", courseRoutes);
app.use("/user", userRoutes);
app.use("/coursebought", courseBoughtRoutes);

dotenv.config();

mongoose.connect(process.env.URI).then(()=> {
  
  console.log("Connected successfully");

  app.listen(process.env.PORT || 8000, (error) => {
    if(error) console.log(err);
    console.log("Running Successfully at : " + process.env.PORT)
  });
  
}).catch((error) => {
  
  console.log("Error occurred : ", error);
  
})
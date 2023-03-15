import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createCourse, fetchCourses } from "./course.controllers";
export const LikeRouter: Router = express.Router();

LikeRouter.post("/createCourse", verifyJwtToken, createCourse);
LikeRouter.post("/fetchCourses", verifyJwtToken, fetchCourses);

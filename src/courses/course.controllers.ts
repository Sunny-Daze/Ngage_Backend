import { Request, Response } from "express";
import { PostModel } from "../posts/Post.model";
import { CourseModel } from "./course.model";

export const createCourse = async (req: any, res: Response) => {
  let { user, post } = req.body;
  try {
    let data;

  //

    if (data) {
    

      res.status(201).json({
        success: true,
        message: "Liked Post",
        result: data,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Like Post",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "failed to like post",
      error,
    });
  }
};

export const fetchCourses = async (req: any, res: Response) => {
  let { user, post } = req.body;
  try {
    let unliked = await CourseModel.findOneAndDelete(
      {
        user,
        post,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (unliked) {
      await PostModel.findOneAndUpdate({_id:post}, {
        $inc: { likeCounts: -1 },
      });
      res.status(201).json({
        success: true,
        message: "unliked",
        result: unliked,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to unliked",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to unlike",
      error,
    });
  }
};


export const fetchUsersEnrolledCourses = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
   

    if ("") {
     
      res.status(201).json({
        success: true,
        message: "unliked",
        result: "unliked",
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to unliked",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to unlike",
      error,
    });
  }
};
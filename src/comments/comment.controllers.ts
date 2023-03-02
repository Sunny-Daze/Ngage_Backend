import { Request, Response } from "express";
import { CommentModel } from "./Comment.model";

export const createComment = async (req: any, res: Response) => {
  let { comment, user, post } = req.body;
  try {
    let insertedComment = await CommentModel.create({
      user,
      comment,
      post,
    });

    if (insertedComment) {
      res.status(201).json({
        success: true,
        message: "Comment has been added",
        result: insertedComment,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add Comment",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add Comment",
      error,
    });
  }
};

export const fetchComment  = async (req: any, res: Response) => {
  let { limit, skip } = req.body;
  try {
    let comments = await CommentModel.find({
      isDeleted: false,
    }).populate('user');
     
    if (comments) {
      res.status(201).json({
        success: true,
        message: "Fetched Comments",
        result: comments,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch Comments",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch Comments",
      error,
    });
  }
};

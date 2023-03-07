import { Request, Response } from "express";
import { LikeModel } from "../likes/like.model";
import { PostModel } from "./Post.model";

export const createPost = async (req: any, res: Response) => {
  let { category, content, user, title } = req.body;
  try {
    let post = await PostModel.create({
      category,
      content,
      user,
      title,
    });

    let createdPost = await PostModel.findById(post.id).populate("user", {
      userName: 1,
    });

    if (createdPost) {
      res.status(201).json({
        success: true,
        message: "Post has been added",
        result: createdPost,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add post",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add post",
      error,
    });
  }
};

export const fetchPosts = async (req: any, res: Response) => {
  let { limit, skip, user } = req.body;
  try {
    let posts = await PostModel.find({
      isDeleted: false,
      isActive: true,
    })
      // .limit(limit)
      // .skip(skip)
      .populate("user", {
        userName: 1,
      })
      .sort({ createdAt: -1 });

    for (let i = 0; i < posts.length; i++) {
      let liked = await LikeModel.findOne({
        post: posts[i].id,
        user: user,
      });

      if (liked) {
        posts[i].liked = true;
      } else {
        posts[i].liked = false;
      }
    }

    if (posts) {
      res.status(201).json({
        success: true,
        message: "Fetched Post",
        result: posts,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch post",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch post",
      error,
    });
  }
};

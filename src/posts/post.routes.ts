import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createPost, deletePost, fetchPosts } from "./post.controllers";
export const PostRoutes: Router = express.Router();

PostRoutes.post("/createPost", verifyJwtToken, createPost);
PostRoutes.post("/fetchPosts", verifyJwtToken, fetchPosts);
PostRoutes.post("/deletePost", verifyJwtToken, deletePost);


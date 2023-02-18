import express, { Router } from "express";
import { createPost } from "./post.controllers";
export const PostRoutes: Router = express.Router();

PostRoutes.post("/createPost", createPost);



import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createComment, fetchComment } from "./comment.controllers";
export const CommentRoutes: Router = express.Router();

CommentRoutes.post("/createComment", verifyJwtToken, createComment);
CommentRoutes.post("/fetchComment", verifyJwtToken, fetchComment);

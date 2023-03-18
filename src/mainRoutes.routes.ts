import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CommentRoutes } from "./comments/comment.routes";
import { LikeRouter } from "./likes/like.routes";
import { PostRoutes } from "./posts/post.routes";
import { RecreationRoutes } from "./recreation/recreation.routes";
import { ShopRoutes } from "./shop/shop.routes";
const app = express();


app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);
app.use("/shop", ShopRoutes);
app.use("/comment", CommentRoutes);
app.use("/like", LikeRouter);
app.use("/recreation", RecreationRoutes);

module.exports = app;

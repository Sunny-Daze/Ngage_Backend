import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { PostRoutes } from "./posts/post.routes";
const app = express();


app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);



module.exports = app;

import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { PostRoutes } from "./posts/post.routes";
import { ShopRoutes } from "./shop/shop.routes";
const app = express();


app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);
app.use("/shop", ShopRoutes);


module.exports = app;

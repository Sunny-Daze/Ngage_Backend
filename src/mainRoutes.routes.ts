import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CommentRoutes } from "./comments/comment.routes";
import { LikeRouter } from "./likes/like.routes";
import { PostRoutes } from "./posts/post.routes";
import { RecreationRoutes } from "./recreation/recreation.routes";
import { RecreationMilestoneRoutes } from "./recreation/recreationMilestone/recreationMileStone.routes";
import { RecreationUserMapRoutes } from "./recreation/recreationUserMap/recreationuserMap.routes";
import { ShopRoutes } from "./shop/shop.routes";
import { TrainingRoutes } from "./training/training.routes";
import { TraningTaskRoutes } from "./training/trainingTask/trainingTask.routes";
import { ProjectRoutes } from "./projects/project.routes";
import { ProjectTaskRoutes } from "./projects/projectTasks/projectTasks.routes";
import { ServiceRouter } from "./services/services.routes";
const app = express();

app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);
app.use("/shop", ShopRoutes);
app.use("/comment", CommentRoutes);
app.use("/like", LikeRouter);
app.use("/recreation", RecreationRoutes);
app.use("/recreationMilestone", RecreationMilestoneRoutes);
app.use("/recreationUserMapRoutes", RecreationUserMapRoutes);

app.use("/training", TrainingRoutes);
app.use("/trainingTask", TraningTaskRoutes);

app.use("/project", ProjectRoutes);
app.use("/projectTask", ProjectTaskRoutes);

app.use("/service", ServiceRouter);

module.exports = app;

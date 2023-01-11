import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
const app = express();


app.use("/Auth", AuthRoutes);


module.exports = app;

import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  createTrainingTask,
  updateTrainingTask,
  deleteTrainingTask
} from "./trainingTask.controller";
export const TraningTaskRoutes: Router = express.Router();

TraningTaskRoutes.post("/createTrainingTask", verifyJwtToken, createTrainingTask);
TraningTaskRoutes.post("/updateTrainingTask", verifyJwtToken, updateTrainingTask);
TraningTaskRoutes.post("/deleteTrainingTask", verifyJwtToken, deleteTrainingTask);



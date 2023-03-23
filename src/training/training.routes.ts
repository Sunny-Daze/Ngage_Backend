import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import {
  fetchTrainings,
  createTraining,
  deleteTraining,
  updateTraining,
} from "./training.controller";
export const TrainingRoutes: Router = express.Router();

TrainingRoutes.post("/fetchTrainings", verifyJwtToken, fetchTrainings);
TrainingRoutes.post("/createTraining", verifyJwtToken, createTraining);
TrainingRoutes.post("/updateTraining", verifyJwtToken, updateTraining);
TrainingRoutes.post("/deleteTraining", verifyJwtToken, deleteTraining);




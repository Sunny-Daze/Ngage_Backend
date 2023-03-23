import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  createRecreationMileStone,
  updateRecreationMileStone,
  deleteRecreationMileStone
} from "./trainingTask.controller";
export const TraningTaskRoutes: Router = express.Router();

TraningTaskRoutes.post("/createRecreationMileStone", verifyJwtToken, createRecreationMileStone);
TraningTaskRoutes.post("/updateRecreationMileStone", verifyJwtToken, updateRecreationMileStone);
TraningTaskRoutes.post("/deleteRecreationMileStone", verifyJwtToken, deleteRecreationMileStone);



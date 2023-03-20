import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  createRecreationMileStone,
  updateRecreationMileStone,
  deleteRecreationMileStone
} from "./recreationMileStone.controller";
export const RecreationMilestoneRoutes: Router = express.Router();

RecreationMilestoneRoutes.post("/createRecreationMileStone", verifyJwtToken, createRecreationMileStone);
RecreationMilestoneRoutes.post("/updateRecreationMileStone", verifyJwtToken, updateRecreationMileStone);
RecreationMilestoneRoutes.post("/deleteRecreationMileStone", verifyJwtToken, deleteRecreationMileStone);



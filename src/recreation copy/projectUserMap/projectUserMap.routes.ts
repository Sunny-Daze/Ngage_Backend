import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  joinRecreation,
  updateUserrecreationMilestoneStatus,
} from "./projectUserMap.controller";
export const RecreationUserMapRoutes: Router = express.Router();

RecreationUserMapRoutes.post(
  "/joinRecreation",
  verifyJwtToken,
  joinRecreation
);
RecreationUserMapRoutes.post(
  "/updateUserrecreationMilestoneStatus",
  verifyJwtToken,
  updateUserrecreationMilestoneStatus
);

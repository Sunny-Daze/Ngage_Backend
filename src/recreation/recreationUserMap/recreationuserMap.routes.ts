import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  joinRecreation,
  updateUserrecreationMilestoneStatus,
  fetchedUsersRecreation
} from "./recreationUserMap.controller";
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


RecreationUserMapRoutes.post(
  "/fetchedUsersRecreation",
  verifyJwtToken,
  fetchedUsersRecreation
);




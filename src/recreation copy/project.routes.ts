import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import {
  fetchRecreations,
  createRecreation,
  deleteRecreation,
  updateRecreation,
} from "./recreation.controller";
export const RecreationRoutes: Router = express.Router();

RecreationRoutes.post("/fetchRecreations", verifyJwtToken, fetchRecreations);
RecreationRoutes.post("/createRecreation", verifyJwtToken, createRecreation);
RecreationRoutes.post("/updateRecreation", verifyJwtToken, updateRecreation);
RecreationRoutes.post("/deleteRecreation", verifyJwtToken, deleteRecreation);

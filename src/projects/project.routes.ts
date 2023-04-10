import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import {
  fetchProject,
  createProject,
  deleteProject,
  editProject
} from "./project.controller";
export const ProjectRoutes: Router = express.Router();

ProjectRoutes.post("/fetchProject", verifyJwtToken, fetchProject);
ProjectRoutes.post("/createProject", verifyJwtToken, createProject);
ProjectRoutes.post("/deleteProject", verifyJwtToken, deleteProject);
ProjectRoutes.post("/editProject", verifyJwtToken, editProject);

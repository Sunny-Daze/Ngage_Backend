import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import { createProjectTask } from "./projectTasks.controller";

export const ProjectTaskRoutes: Router = express.Router();

ProjectTaskRoutes.post("/createProjectTask", verifyJwtToken, createProjectTask);
// ProjectTaskRoutes.post("/updateProjectTask", verifyJwtToken, updateProjectTask);
// ProjectTaskRoutes.post("/deleteProjectTask", verifyJwtToken, deleteProjectTask);



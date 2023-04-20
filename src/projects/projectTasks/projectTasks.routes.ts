import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import { createProjectTask, editProjectTask } from "./projectTasks.controller";

export const ProjectTaskRoutes: Router = express.Router();

ProjectTaskRoutes.post("/createProjectTask", verifyJwtToken, createProjectTask);
ProjectTaskRoutes.post("/editProjectTask", verifyJwtToken, editProjectTask);
// ProjectTaskRoutes.post("/deleteProjectTask", verifyJwtToken, deleteProjectTask);

    

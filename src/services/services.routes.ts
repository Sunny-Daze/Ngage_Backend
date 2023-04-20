import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import {
  createService,
  fetchServices,
  deleteService,
  editService,
} from "./services.controller";
export const ServiceRouter: Router = express.Router();

// /api/service/

ServiceRouter.post("/createService", verifyJwtToken, createService);
ServiceRouter.post("/fetchServices", verifyJwtToken, fetchServices);
ServiceRouter.post("/editService", verifyJwtToken, editService);
ServiceRouter.post("/deleteService", verifyJwtToken, deleteService);

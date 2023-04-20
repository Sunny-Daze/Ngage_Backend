"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../../utils/middleware/JWT");
const projectTasks_controller_1 = require("./projectTasks.controller");
exports.ProjectTaskRoutes = express_1.default.Router();
exports.ProjectTaskRoutes.post("/createProjectTask", JWT_1.verifyJwtToken, projectTasks_controller_1.createProjectTask);
exports.ProjectTaskRoutes.post("/editProjectTask", JWT_1.verifyJwtToken, projectTasks_controller_1.editProjectTask);

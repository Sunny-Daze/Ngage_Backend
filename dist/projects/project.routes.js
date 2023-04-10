"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const project_controller_1 = require("./project.controller");
exports.ProjectRoutes = express_1.default.Router();
exports.ProjectRoutes.post("/fetchProject", JWT_1.verifyJwtToken, project_controller_1.fetchProject);
exports.ProjectRoutes.post("/createProject", JWT_1.verifyJwtToken, project_controller_1.createProject);
exports.ProjectRoutes.post("/deleteProject", JWT_1.verifyJwtToken, project_controller_1.deleteProject);
exports.ProjectRoutes.post("/editProject", JWT_1.verifyJwtToken, project_controller_1.editProject);

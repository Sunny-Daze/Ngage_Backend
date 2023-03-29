"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraningTaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../../utils/middleware/JWT");
const trainingTask_controller_1 = require("./trainingTask.controller");
exports.TraningTaskRoutes = express_1.default.Router();
exports.TraningTaskRoutes.post("/createTrainingTask", JWT_1.verifyJwtToken, trainingTask_controller_1.createTrainingTask);
exports.TraningTaskRoutes.post("/updateTrainingTask", JWT_1.verifyJwtToken, trainingTask_controller_1.updateTrainingTask);
exports.TraningTaskRoutes.post("/deleteTrainingTask", JWT_1.verifyJwtToken, trainingTask_controller_1.deleteTrainingTask);
exports.TraningTaskRoutes.post("/completeTraningTask", JWT_1.verifyJwtToken, trainingTask_controller_1.completeTraningTask);

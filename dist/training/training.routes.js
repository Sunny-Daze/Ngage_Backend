"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const training_controller_1 = require("./training.controller");
exports.TrainingRoutes = express_1.default.Router();
exports.TrainingRoutes.post("/fetchTrainings", JWT_1.verifyJwtToken, training_controller_1.fetchTrainings);
exports.TrainingRoutes.post("/createTraining", JWT_1.verifyJwtToken, training_controller_1.createTraining);
exports.TrainingRoutes.post("/updateTraining", JWT_1.verifyJwtToken, training_controller_1.updateTraining);
exports.TrainingRoutes.post("/deleteTraining", JWT_1.verifyJwtToken, training_controller_1.deleteTraining);
exports.TrainingRoutes.post("/enrolForTraining", JWT_1.verifyJwtToken, training_controller_1.enrolForTraining);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecreationUserMapRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../../utils/middleware/JWT");
const projectUserMap_controller_1 = require("./projectUserMap.controller");
exports.RecreationUserMapRoutes = express_1.default.Router();
exports.RecreationUserMapRoutes.post("/joinRecreation", JWT_1.verifyJwtToken, projectUserMap_controller_1.joinRecreation);
exports.RecreationUserMapRoutes.post("/updateUserrecreationMilestoneStatus", JWT_1.verifyJwtToken, projectUserMap_controller_1.updateUserrecreationMilestoneStatus);

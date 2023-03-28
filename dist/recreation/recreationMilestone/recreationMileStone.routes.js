"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecreationMilestoneRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../../utils/middleware/JWT");
const recreationMileStone_controller_1 = require("./recreationMileStone.controller");
exports.RecreationMilestoneRoutes = express_1.default.Router();
exports.RecreationMilestoneRoutes.post("/createRecreationMileStone", JWT_1.verifyJwtToken, recreationMileStone_controller_1.createRecreationMileStone);
exports.RecreationMilestoneRoutes.post("/updateRecreationMileStone", JWT_1.verifyJwtToken, recreationMileStone_controller_1.updateRecreationMileStone);
exports.RecreationMilestoneRoutes.post("/deleteRecreationMileStone", JWT_1.verifyJwtToken, recreationMileStone_controller_1.deleteRecreationMileStone);
exports.RecreationMilestoneRoutes.post("/completeRecreationMileStone", JWT_1.verifyJwtToken, recreationMileStone_controller_1.completeRecreationMileStone);

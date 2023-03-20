"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecreationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const recreation_controller_1 = require("./recreation.controller");
exports.RecreationRoutes = express_1.default.Router();
exports.RecreationRoutes.post("/fetchRecreations", JWT_1.verifyJwtToken, recreation_controller_1.fetchRecreations);
exports.RecreationRoutes.post("/createRecreation", JWT_1.verifyJwtToken, recreation_controller_1.createRecreation);
exports.RecreationRoutes.post("/updateRecreation", JWT_1.verifyJwtToken, recreation_controller_1.updateRecreation);
exports.RecreationRoutes.post("/deleteRecreation", JWT_1.verifyJwtToken, recreation_controller_1.deleteRecreation);

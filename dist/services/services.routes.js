"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const services_controller_1 = require("./services.controller");
exports.ServiceRouter = express_1.default.Router();
exports.ServiceRouter.post("/createService", JWT_1.verifyJwtToken, services_controller_1.createService);
exports.ServiceRouter.post("/fetchServices", JWT_1.verifyJwtToken, services_controller_1.fetchServices);
exports.ServiceRouter.post("/editService", JWT_1.verifyJwtToken, services_controller_1.editService);
exports.ServiceRouter.post("/deleteService", JWT_1.verifyJwtToken, services_controller_1.deleteService);

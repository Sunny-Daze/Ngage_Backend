"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeRouter = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const course_controllers_1 = require("./course.controllers");
exports.LikeRouter = express_1.default.Router();
exports.LikeRouter.post("/createCourse", JWT_1.verifyJwtToken, course_controllers_1.createCourse);
exports.LikeRouter.post("/fetchCourses", JWT_1.verifyJwtToken, course_controllers_1.fetchCourses);

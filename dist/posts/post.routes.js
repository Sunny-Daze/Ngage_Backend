"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const post_controllers_1 = require("./post.controllers");
exports.PostRoutes = express_1.default.Router();
exports.PostRoutes.post("/createPost", post_controllers_1.createPost);

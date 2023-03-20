"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsersEnrolledCourses = exports.fetchCourses = exports.createCourse = void 0;
const Post_model_1 = require("../posts/Post.model");
const course_model_1 = require("./course.model");
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user, post } = req.body;
    try {
        let data;
        if (data) {
            res.status(201).json({
                success: true,
                message: "Liked Post",
                result: data,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Like Post",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "failed to like post",
            error,
        });
    }
});
exports.createCourse = createCourse;
const fetchCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user, post } = req.body;
    try {
        let unliked = yield course_model_1.CourseModel.findOneAndDelete({
            user,
            post,
        }, {
            new: true,
            runValidators: true,
        });
        if (unliked) {
            yield Post_model_1.PostModel.findOneAndUpdate({ _id: post }, {
                $inc: { likeCounts: -1 },
            });
            res.status(201).json({
                success: true,
                message: "unliked",
                result: unliked,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to unliked",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to unlike",
            error,
        });
    }
});
exports.fetchCourses = fetchCourses;
const fetchUsersEnrolledCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user } = req.body;
    try {
        if ("") {
            res.status(201).json({
                success: true,
                message: "unliked",
                result: "unliked",
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to unliked",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to unlike",
            error,
        });
    }
});
exports.fetchUsersEnrolledCourses = fetchUsersEnrolledCourses;

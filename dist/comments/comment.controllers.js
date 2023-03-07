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
exports.fetchComment = exports.createComment = void 0;
const Comment_model_1 = require("./Comment.model");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { comment, user, post } = req.body;
    try {
        let insertedComment = yield Comment_model_1.CommentModel.create({
            user,
            comment,
            post,
        });
        if (insertedComment) {
            res.status(201).json({
                success: true,
                message: "Comment has been added",
                result: insertedComment,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to add Comment",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to add Comment",
            error,
        });
    }
});
exports.createComment = createComment;
const fetchComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit, skip } = req.body;
    try {
        let comments = yield Comment_model_1.CommentModel.find({
            isDeleted: false,
        }).populate('user');
        if (comments) {
            res.status(201).json({
                success: true,
                message: "Fetched Comments",
                result: comments,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to fetch Comments",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch Comments",
            error,
        });
    }
});
exports.fetchComment = fetchComment;
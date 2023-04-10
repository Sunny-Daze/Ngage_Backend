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
exports.completeTraningTask = exports.deleteTrainingTask = exports.updateTrainingTask = exports.createTrainingTask = void 0;
const projectTasks_model_1 = require("./projectTasks.model");
const projectTasksUserMap_1 = require("./projectTasksUserMap");
const User_model_1 = require("../../auth/User.model");
const createTrainingTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingId, title, desc, userPoints } = req.body;
    try {
        let trainingTask = yield projectTasks_model_1.TrainingTaskModel.create({
            trainingId: trainingId,
            title: title,
            desc: desc,
            userPoints: userPoints,
        });
        if (trainingTask) {
            res.status(201).json({
                success: true,
                message: "Recreation trainingTask created",
                result: trainingTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create training task",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to create recreation  milestone",
            error,
        });
    }
});
exports.createTrainingTask = createTrainingTask;
const updateTrainingTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingTaskId, title, desc, userPoints } = req.body;
    try {
        let trainingTask = yield projectTasks_model_1.TrainingTaskModel.findByIdAndUpdate(trainingTaskId, {
            title: title,
            desc: desc,
            userPoints: userPoints,
        }, {
            runValidators: true,
            new: true,
        });
        if (trainingTask) {
            trainingTask = yield projectTasks_model_1.TrainingTaskModel.findById(trainingTaskId);
            res.status(201).json({
                success: true,
                message: "trainingTask updated",
                result: trainingTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to update recreation milestone",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to update recreation  milestone",
            error,
        });
    }
});
exports.updateTrainingTask = updateTrainingTask;
const deleteTrainingTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingTaskId } = req.body;
    try {
        let trainingTask = yield projectTasks_model_1.TrainingTaskModel.findByIdAndUpdate(trainingTaskId, {
            isDeleted: true,
            isActive: false,
        });
        if (trainingTask) {
            res.status(201).json({
                success: true,
                message: "Training TrainingTask created",
                result: trainingTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to delete Training task",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to delete recreation  milestone",
            error,
        });
    }
});
exports.deleteTrainingTask = deleteTrainingTask;
const completeTraningTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingTaskId, user } = req.body;
    try {
        let trainingTask = yield projectTasksUserMap_1.TrainingTaskUserMapModel.create({
            trainingTaskId,
            user,
        });
        if (trainingTask) {
            let userPoint = yield projectTasks_model_1.TrainingTaskModel.findById(trainingTaskId);
            yield User_model_1.UserModel.findByIdAndUpdate(user, {
                $inc: {
                    userPoints: userPoint === null || userPoint === void 0 ? void 0 : userPoint.userPoints,
                },
            });
            res.status(201).json({
                success: true,
                message: "Training TrainingTask created",
                result: trainingTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to delete Training task",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to delete recreation  milestone",
            error,
        });
    }
});
exports.completeTraningTask = completeTraningTask;

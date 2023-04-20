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
exports.editProjectTask = exports.createProjectTask = void 0;
const projectTasks_model_1 = require("./projectTasks.model");
const createProjectTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { projectId, title, desc, cost, user, priority, deadline, note, assignedTo, } = req.body;
    try {
        let projectTask = yield projectTasks_model_1.ProjectTaskModel.create({
            projectId,
            title,
            desc,
            createdBy: user,
            priority,
            note,
            deadline,
            cost,
            assignedTo,
        });
        if (projectTask) {
            res.status(201).json({
                success: true,
                result: projectTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: projectTask,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            error,
        });
    }
});
exports.createProjectTask = createProjectTask;
const editProjectTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { taskId, title, desc, cost, user, priority, deadline, note, assignedTo, } = req.body;
    try {
        let projectTask = yield projectTasks_model_1.ProjectTaskModel.findByIdAndUpdate(taskId, {
            title,
            desc,
            createdBy: user,
            priority,
            note,
            deadline,
            cost,
            assignedTo,
        }, {
            new: true,
            runValidators: true,
        });
        if (projectTask) {
            res.status(201).json({
                success: true,
                result: projectTask,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: projectTask,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            error,
        });
    }
});
exports.editProjectTask = editProjectTask;

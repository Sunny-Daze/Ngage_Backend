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
exports.fetchProject = exports.deleteProject = exports.editProject = exports.createProject = void 0;
const project_model_1 = require("./project.model");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, desc, createdBy, cost } = req.body;
    try {
        let project = yield project_model_1.ProjectModel.create({
            title, desc, createdBy
        });
        if (project) {
            res.status(201).json({
                success: true,
                result: project,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: project,
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
exports.createProject = createProject;
const editProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { projectId, title, desc, createdBy, cost } = req.body;
    try {
        let project = yield project_model_1.ProjectModel.findByIdAndUpdate(projectId, {
            title, desc, createdBy, cost
        });
        if (project) {
            res.status(201).json({
                success: true,
                message: "project edited",
                result: project,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: project,
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
exports.editProject = editProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { projectId } = req.body;
    try {
        let project = yield project_model_1.ProjectModel.findByIdAndUpdate(projectId, {
            isDeleted: true,
            isActive: false
        });
        if (project) {
            res.status(201).json({
                success: true,
                result: project,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: project,
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
exports.deleteProject = deleteProject;
const fetchProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let project = yield project_model_1.ProjectModel.find({
            isDeleted: false,
            isActive: true
        });
        if (project) {
            res.status(201).json({
                success: true,
                result: project,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: project,
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
exports.fetchProject = fetchProject;

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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProject = exports.deleteProject = exports.editProject = exports.createProject = void 0;
const project_model_1 = require("./project.model");
const projectTasks_model_1 = require("./projectTasks/projectTasks.model");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, desc, createdBy, cost, user } = req.body;
    try {
        let project = yield project_model_1.ProjectModel.create({
            title,
            desc,
            createdBy: user,
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
    let { projectId, title, desc, createdBy } = req.body;
    try {
        let project = yield project_model_1.ProjectModel.findByIdAndUpdate(projectId, {
            title,
            desc,
            createdBy,
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
            isActive: false,
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
    var _a, e_1, _b, _c;
    try {
        let projects = yield project_model_1.ProjectModel.find({
            isDeleted: false,
            isActive: true,
        }).populate("createdBy", { userName: 1 });
        try {
            for (var _d = true, projects_1 = __asyncValues(projects), projects_1_1; projects_1_1 = yield projects_1.next(), _a = projects_1_1.done, !_a;) {
                _c = projects_1_1.value;
                _d = false;
                try {
                    const project = _c;
                    let tasks = yield projectTasks_model_1.ProjectTaskModel.find({
                        projectId: project._id,
                        isActive: true,
                        isDeleted: false,
                    });
                    project.tasks = tasks;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = projects_1.return)) yield _b.call(projects_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (projects) {
            res.status(201).json({
                success: true,
                result: projects,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: projects,
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

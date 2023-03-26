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
exports.fetchTrainingForUser = exports.deleteTraining = exports.updateTraining = exports.createTraining = exports.fetchTrainings = void 0;
const traning_model_1 = require("./traning.model");
const trainingTask_model_1 = require("./trainingTask/trainingTask.model");
const fetchTrainings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    try {
        let training = yield traning_model_1.TrainingModel.find({
            isActive: true,
            isDeleted: false,
        }).populate("createdBy", { userName: 1 });
        try {
            for (var _d = true, training_1 = __asyncValues(training), training_1_1; training_1_1 = yield training_1.next(), _a = training_1_1.done, !_a;) {
                _c = training_1_1.value;
                _d = false;
                try {
                    const train = _c;
                    let tasks = yield trainingTask_model_1.TrainingTaskModel.find({
                        isDeleted: false,
                        isActive: true,
                        recreationId: train._id,
                    });
                    train.tasks = tasks;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = training_1.return)) yield _b.call(training_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (training) {
            res.status(201).json({
                success: true,
                message: "training Fetched",
                result: training,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to fetch Training",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch Training",
            error,
        });
    }
});
exports.fetchTrainings = fetchTrainings;
const createTraining = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, desc, user } = req.body;
    try {
        let training = yield traning_model_1.TrainingModel.create({
            title: title,
            desc: desc,
            createdBy: user,
        });
        if (training) {
            let newtraining = yield traning_model_1.TrainingModel.findById(training.id).populate("createdBy", { userName: 1 });
            res.status(201).json({
                success: true,
                message: "Training Created",
                result: newtraining,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create recreation",
                result: training,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to create recreation",
            error,
        });
    }
});
exports.createTraining = createTraining;
const updateTraining = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingId, title, desc, user } = req.body;
    try {
        let training = yield traning_model_1.TrainingModel.findByIdAndUpdate(trainingId, {
            title: title,
            desc: desc,
            createdBy: user,
        }, {
            runValidators: true,
            new: true,
        });
        training = yield traning_model_1.TrainingModel.findById(trainingId).populate("createdBy", {
            userName: 1,
        });
        if (training) {
            res.status(201).json({
                success: true,
                message: "training Updated",
                result: training,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to update training",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to update training",
            error,
        });
    }
});
exports.updateTraining = updateTraining;
const deleteTraining = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { trainingId } = req.body;
    try {
        let training = yield traning_model_1.TrainingModel.findByIdAndUpdate(trainingId, {
            isActive: false,
            isDeleted: true,
        });
        if (training) {
            res.status(201).json({
                success: true,
                message: "training Deleted",
                result: training,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to Delete training",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to Delete training",
            error,
        });
    }
});
exports.deleteTraining = deleteTraining;
const fetchTrainingForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user } = req.body;
    try {
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch recreation",
            error,
        });
    }
});
exports.fetchTrainingForUser = fetchTrainingForUser;

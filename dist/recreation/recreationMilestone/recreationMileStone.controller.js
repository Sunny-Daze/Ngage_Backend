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
exports.completeRecreationMileStone = exports.deleteRecreationMileStone = exports.updateRecreationMileStone = exports.createRecreationMileStone = void 0;
const recreationMileStone_model_1 = require("./recreationMileStone.model");
const milestoneUserMap_model_1 = require("./milestoneUserMap.model");
const User_model_1 = require("../../auth/User.model");
const createRecreationMileStone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationId, title, desc, userPoints } = req.body;
    try {
        let mileStone = yield recreationMileStone_model_1.RecreationMilestoneModel.create({
            recreationId: recreationId,
            title: title,
            desc: desc,
            userPoints: userPoints,
        });
        if (mileStone) {
            res.status(201).json({
                success: true,
                message: "Recreation milestone created",
                result: mileStone,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create recreation milestone",
                result: mileStone,
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
exports.createRecreationMileStone = createRecreationMileStone;
const updateRecreationMileStone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationMileStoneId, title, desc, userPoints } = req.body;
    try {
        let mileStone = yield recreationMileStone_model_1.RecreationMilestoneModel.findByIdAndUpdate(recreationMileStoneId, {
            title: title,
            desc: desc,
            userPoints: userPoints,
        }, {
            runValidators: true,
            new: true,
        });
        if (mileStone) {
            res.status(201).json({
                success: true,
                message: "Recreation milestone updated",
                result: mileStone,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to update recreation milestone",
                result: mileStone,
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
exports.updateRecreationMileStone = updateRecreationMileStone;
const deleteRecreationMileStone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationMileStoneId } = req.body;
    try {
        let mileStone = yield recreationMileStone_model_1.RecreationMilestoneModel.findByIdAndUpdate(recreationMileStoneId, {
            isDeleted: true,
            isActive: false,
        });
        if (mileStone) {
            res.status(201).json({
                success: true,
                message: "Recreation milestone created",
                result: mileStone,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create recreation milestone",
                result: mileStone,
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
exports.deleteRecreationMileStone = deleteRecreationMileStone;
const completeRecreationMileStone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationMileStoneId, user } = req.body;
    try {
        let updatedData = milestoneUserMap_model_1.RecreationMilestoneUserMapModel.create({
            user,
            recreationMileStoneId,
        });
        let points = yield recreationMileStone_model_1.RecreationMilestoneModel.findById(recreationMileStoneId);
        yield User_model_1.UserModel.findByIdAndUpdate(user, {
            $inc: {
                userPoints: points.userPoints,
            },
        });
        if (updatedData) {
            res.status(201).json({
                success: true,
                result: updatedData,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: null,
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
exports.completeRecreationMileStone = completeRecreationMileStone;

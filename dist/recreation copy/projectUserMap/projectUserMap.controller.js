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
exports.updateUserrecreationMilestoneStatus = exports.joinRecreation = void 0;
const User_model_1 = require("src/auth/User.model");
const projectUserMap_model_1 = require("./projectUserMap.model");
const joinRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationId, user } = req.body;
    try {
        let recreation = yield projectUserMap_model_1.RecreationUserMapModel.create({
            user,
            recreationId,
        });
        if (recreation) {
            res.status(201).json({
                success: true,
                message: "User joined to recreation",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed User joined to recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed User joined to recreation",
            error,
        });
    }
});
exports.joinRecreation = joinRecreation;
const updateUserrecreationMilestoneStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { milestoneId, user, status, userPoints } = req.body;
    try {
        let recreation = yield projectUserMap_model_1.RecreationUserMapModel.findOneAndUpdate({
            milestoneId,
            user,
        }, {
            status,
        });
        if (recreation) {
            if (status) {
                yield User_model_1.UserModel.findByIdAndUpdate(user, {
                    $inc: {
                        userPoints: userPoints,
                    },
                });
            }
            res.status(201).json({
                success: true,
                message: "User joined to recreation",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed User joined to recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed User joined to recreation",
            error,
        });
    }
});
exports.updateUserrecreationMilestoneStatus = updateUserrecreationMilestoneStatus;

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
exports.fetchedUsersRecreation = exports.updateUserrecreationMilestoneStatus = exports.joinRecreation = void 0;
const User_model_1 = require("../../auth/User.model");
const recreation_model_1 = require("../recreation.model");
const recreationMileStone_model_1 = require("../recreationMilestone/recreationMileStone.model");
const recreationUserMap_model_1 = require("./recreationUserMap.model");
const joinRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationId, user } = req.body;
    try {
        let recreation = yield recreationUserMap_model_1.RecreationUserMapModel.create({
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
        let recreation = yield recreationUserMap_model_1.RecreationUserMapModel.findOneAndUpdate({
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
const fetchedUsersRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    let { user } = req.body;
    try {
        let userRecreations = [];
        let mappedData = yield recreationUserMap_model_1.RecreationUserMapModel.find({ user: user });
        if (mappedData) {
            try {
                for (var _d = true, mappedData_1 = __asyncValues(mappedData), mappedData_1_1; mappedData_1_1 = yield mappedData_1.next(), _a = mappedData_1_1.done, !_a;) {
                    _c = mappedData_1_1.value;
                    _d = false;
                    try {
                        const rec = _c;
                        let recreation = yield recreation_model_1.RecreationModel.findById(rec._id);
                        let milestone = yield recreationMileStone_model_1.RecreationMilestoneModel.find(recreation === null || recreation === void 0 ? void 0 : recreation._id);
                        recreation.milestones = milestone ? milestone : [];
                        userRecreations.push(recreation);
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = mappedData_1.return)) yield _b.call(mappedData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (userRecreations) {
            res.status(201).json({
                success: true,
                message: "Fetched Users Recreation",
                result: userRecreations,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed User joined to recreation",
                result: null,
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
exports.fetchedUsersRecreation = fetchedUsersRecreation;

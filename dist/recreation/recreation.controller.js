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
exports.fetchRecreationsForUser = exports.deleteRecreation = exports.updateRecreation = exports.createRecreation = exports.fetchRecreations = void 0;
const recreation_model_1 = require("./recreation.model");
const milestoneUserMap_model_1 = require("./recreationMilestone/milestoneUserMap.model");
const recreationMileStone_model_1 = require("./recreationMilestone/recreationMileStone.model");
const recreationUserMap_model_1 = require("./recreationUserMap/recreationUserMap.model");
const fetchRecreations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    let { user } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.find({
            isActive: true,
            isDeleted: false,
        }).populate("createdBy", { userName: 1 });
        try {
            for (var _g = true, recreation_1 = __asyncValues(recreation), recreation_1_1; recreation_1_1 = yield recreation_1.next(), _a = recreation_1_1.done, !_a;) {
                _c = recreation_1_1.value;
                _g = false;
                try {
                    const rec = _c;
                    let participated = yield recreationUserMap_model_1.RecreationUserMapModel.findOne({
                        user,
                        recreationId: rec._id,
                    });
                    rec.participated = participated ? true : false;
                    let milestones = yield recreationMileStone_model_1.RecreationMilestoneModel.find({
                        isDeleted: false,
                        isActive: true,
                        recreationId: rec._id,
                    });
                    try {
                        for (var _h = true, milestones_1 = (e_2 = void 0, __asyncValues(milestones)), milestones_1_1; milestones_1_1 = yield milestones_1.next(), _d = milestones_1_1.done, !_d;) {
                            _f = milestones_1_1.value;
                            _h = false;
                            try {
                                const mile = _f;
                                let status = yield milestoneUserMap_model_1.RecreationMilestoneUserMapModel.findOne({
                                    user,
                                    recreationMileStoneId: mile._id,
                                });
                                mile.status = status ? true : false;
                            }
                            finally {
                                _h = true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (!_h && !_d && (_e = milestones_1.return)) yield _e.call(milestones_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    rec.milestones = milestones;
                }
                finally {
                    _g = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_g && !_a && (_b = recreation_1.return)) yield _b.call(recreation_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (recreation) {
            res.status(201).json({
                success: true,
                message: "Recreation Fetched",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to fetch recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch recreation",
            error,
        });
    }
});
exports.fetchRecreations = fetchRecreations;
const createRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, desc, user } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.create({
            title: title,
            desc: desc,
            createdBy: user,
        });
        if (recreation) {
            let newRecreation = yield recreation_model_1.RecreationModel.findById(recreation.id).populate("createdBy", { userName: 1 });
            res.status(201).json({
                success: true,
                message: "Recreation Created",
                result: newRecreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create recreation",
                result: recreation,
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
exports.createRecreation = createRecreation;
const updateRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationId, title, desc, user } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.findByIdAndUpdate(recreationId, {
            title: title,
            desc: desc,
            createdBy: user,
        }, {
            runValidators: true,
            new: true,
        });
        recreation = yield recreation_model_1.RecreationModel.findById(recreationId).populate("createdBy", { userName: 1 });
        if (recreation) {
            res.status(201).json({
                success: true,
                message: "Recreation Updated",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to update recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to update recreation",
            error,
        });
    }
});
exports.updateRecreation = updateRecreation;
const deleteRecreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { recreationId } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.findByIdAndUpdate(recreationId, {
            isActive: false,
            isDeleted: true,
        });
        if (recreation) {
            res.status(201).json({
                success: true,
                message: "Recreation Deleted",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to Delete recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to Delete recreation",
            error,
        });
    }
});
exports.deleteRecreation = deleteRecreation;
const fetchRecreationsForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, e_3, _k, _l, _m, e_4, _o, _p;
    let { user } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.find({
            isActive: true,
            isDeleted: false,
        });
        try {
            for (var _q = true, recreation_2 = __asyncValues(recreation), recreation_2_1; recreation_2_1 = yield recreation_2.next(), _j = recreation_2_1.done, !_j;) {
                _l = recreation_2_1.value;
                _q = false;
                try {
                    const rec = _l;
                    let milestones = yield recreationMileStone_model_1.RecreationMilestoneModel.find({
                        isDeleted: false,
                        isActive: false,
                    });
                    try {
                        for (var _r = true, milestones_2 = (e_4 = void 0, __asyncValues(milestones)), milestones_2_1; milestones_2_1 = yield milestones_2.next(), _m = milestones_2_1.done, !_m;) {
                            _p = milestones_2_1.value;
                            _r = false;
                            try {
                                const mile = _p;
                                let userStatus = yield recreationUserMap_model_1.RecreationUserMapModel.findOne({
                                    milestone: mile._id,
                                    user: user,
                                }).status;
                                mile.status = userStatus.status;
                            }
                            finally {
                                _r = true;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (!_r && !_m && (_o = milestones_2.return)) yield _o.call(milestones_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                finally {
                    _q = true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (!_q && !_j && (_k = recreation_2.return)) yield _k.call(recreation_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (recreation) {
            res.status(201).json({
                success: true,
                message: "Recreation Fetched",
                result: recreation,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to fetch recreation",
                result: recreation,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch recreation",
            error,
        });
    }
});
exports.fetchRecreationsForUser = fetchRecreationsForUser;

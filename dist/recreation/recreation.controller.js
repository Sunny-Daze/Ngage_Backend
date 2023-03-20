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
const recreationMileStone_model_1 = require("./recreationMilestone/recreationMileStone.model");
const recreationUserMap_model_1 = require("./recreationUserMap/recreationUserMap.model");
const fetchRecreations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    try {
        let recreation = yield recreation_model_1.RecreationModel.find({
            isActive: true,
            isDeleted: false,
        }).populate("createdBy", { userName: 1 });
        try {
            for (var _d = true, recreation_1 = __asyncValues(recreation), recreation_1_1; recreation_1_1 = yield recreation_1.next(), _a = recreation_1_1.done, !_a;) {
                _c = recreation_1_1.value;
                _d = false;
                try {
                    const rec = _c;
                    let milestones = yield recreationMileStone_model_1.RecreationMilestoneModel.find({
                        isDeleted: false,
                        isActive: true,
                        recreationId: rec._id,
                    });
                    rec.milestones = milestones;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = recreation_1.return)) yield _b.call(recreation_1);
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
    var _e, e_2, _f, _g, _h, e_3, _j, _k;
    let { user } = req.body;
    try {
        let recreation = yield recreation_model_1.RecreationModel.find({
            isActive: true,
            isDeleted: false,
        });
        try {
            for (var _l = true, recreation_2 = __asyncValues(recreation), recreation_2_1; recreation_2_1 = yield recreation_2.next(), _e = recreation_2_1.done, !_e;) {
                _g = recreation_2_1.value;
                _l = false;
                try {
                    const rec = _g;
                    let milestones = yield recreationMileStone_model_1.RecreationMilestoneModel.find({
                        isDeleted: false,
                        isActive: false,
                    });
                    try {
                        for (var _m = true, milestones_1 = (e_3 = void 0, __asyncValues(milestones)), milestones_1_1; milestones_1_1 = yield milestones_1.next(), _h = milestones_1_1.done, !_h;) {
                            _k = milestones_1_1.value;
                            _m = false;
                            try {
                                const mile = _k;
                                let userStatus = yield recreationUserMap_model_1.RecreationUserMapModel.findOne({
                                    milestone: mile._id,
                                    user: user,
                                }).status;
                                mile.status = userStatus.status;
                            }
                            finally {
                                _m = true;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (!_m && !_h && (_j = milestones_1.return)) yield _j.call(milestones_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                finally {
                    _l = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_l && !_e && (_f = recreation_2.return)) yield _f.call(recreation_2);
            }
            finally { if (e_2) throw e_2.error; }
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

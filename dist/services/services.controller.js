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
exports.deleteService = exports.editService = exports.createService = exports.fetchServices = void 0;
const services_model_1 = require("./services.model");
const fetchServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let {} = req.body;
    try {
        let service = yield services_model_1.ServiceModel.find({
            isDeleted: false,
            isActive: true,
        });
        if (service) {
            res.status(201).json({
                success: true,
                result: service,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: service,
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
exports.fetchServices = fetchServices;
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { firstName, lastName, address, phone, projectName, projectDesc, projectIntro, projectbg, objective, problem, submission, budget, reference, resources, } = req.body;
    try {
        let service = yield services_model_1.ServiceModel.create({
            firstName,
            lastName,
            address,
            phone,
            projectName,
            projectDesc,
            projectIntro,
            projectbg,
            objective,
            problem,
            submission,
            budget,
            reference,
            resources,
        });
        if (service) {
            res.status(201).json({
                success: true,
                result: service,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: service,
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
exports.createService = createService;
const editService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { serviceId, firstName, lastName, address, phone, projectName, projectDesc, projectIntro, projectbg, objective, problem, submission, budget, reference, resources, } = req.body;
    try {
        let service = yield services_model_1.ServiceModel.findByIdAndUpdate(serviceId, {
            firstName,
            lastName,
            address,
            phone,
            projectName,
            projectDesc,
            projectIntro,
            projectbg,
            objective,
            problem,
            submission,
            budget,
            reference,
            resources,
        });
        if (service) {
            res.status(201).json({
                success: true,
                result: service,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: service,
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
exports.editService = editService;
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { serviceId } = req.body;
    try {
        let service = yield services_model_1.ServiceModel.findByIdAndUpdate(serviceId, {
            isDeleted: true,
            isActive: false
        });
        if (service) {
            res.status(201).json({
                success: true,
                result: service,
            });
        }
        else {
            res.status(201).json({
                success: false,
                result: service,
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
exports.deleteService = deleteService;

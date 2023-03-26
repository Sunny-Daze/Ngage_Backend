"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingUserMapModel = exports.TrainingUserMap = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_model_1 = require("../../auth/User.model");
const traning_model_1 = require("../traning.model");
const trainingTask_model_1 = require("../trainingTask/trainingTask.model");
class TrainingUserMap {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], TrainingUserMap.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => traning_model_1.Training }),
    __metadata("design:type", Object)
], TrainingUserMap.prototype, "TrainingId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => trainingTask_model_1.TrainingTask }),
    __metadata("design:type", Object)
], TrainingUserMap.prototype, "milestone", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], TrainingUserMap.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], TrainingUserMap.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], TrainingUserMap.prototype, "isDeleted", void 0);
exports.TrainingUserMap = TrainingUserMap;
exports.TrainingUserMapModel = (0, typegoose_1.getModelForClass)(TrainingUserMap, {
    schemaOptions: { timestamps: true },
});

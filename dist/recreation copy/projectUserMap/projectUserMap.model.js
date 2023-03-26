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
exports.RecreationUserMapModel = exports.RecreationUserMap = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_model_1 = require("../../auth/User.model");
const project_model_1 = require("../project.model");
const recreationMileStone_model_1 = require("../recreationMilestone/recreationMileStone.model");
class RecreationUserMap {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], RecreationUserMap.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => project_model_1.Recreation }),
    __metadata("design:type", Object)
], RecreationUserMap.prototype, "recreationId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => recreationMileStone_model_1.RecreationMilestone }),
    __metadata("design:type", Object)
], RecreationUserMap.prototype, "milestone", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], RecreationUserMap.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], RecreationUserMap.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], RecreationUserMap.prototype, "isDeleted", void 0);
exports.RecreationUserMap = RecreationUserMap;
exports.RecreationUserMapModel = (0, typegoose_1.getModelForClass)(RecreationUserMap, {
    schemaOptions: { timestamps: true },
});

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
exports.RecreationMilestoneUserMapModel = exports.RecreationMilestoneUserMap = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_model_1 = require("../../auth/User.model");
const recreation_model_1 = require("../recreation.model");
class RecreationMilestoneUserMap {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => recreation_model_1.Recreation }),
    __metadata("design:type", Object)
], RecreationMilestoneUserMap.prototype, "recreationMileStoneId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], RecreationMilestoneUserMap.prototype, "user", void 0);
exports.RecreationMilestoneUserMap = RecreationMilestoneUserMap;
exports.RecreationMilestoneUserMapModel = (0, typegoose_1.getModelForClass)(RecreationMilestoneUserMap, {
    schemaOptions: { timestamps: true },
});

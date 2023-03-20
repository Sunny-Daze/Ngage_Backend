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
exports.RecreationMilestoneModel = exports.RecreationMilestone = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const recreation_model_1 = require("../recreation.model");
class RecreationMilestone {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => recreation_model_1.Recreation }),
    __metadata("design:type", Object)
], RecreationMilestone.prototype, "recreationId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], RecreationMilestone.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], RecreationMilestone.prototype, "desc", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], RecreationMilestone.prototype, "userPoints", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], RecreationMilestone.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], RecreationMilestone.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], RecreationMilestone.prototype, "isDeleted", void 0);
exports.RecreationMilestone = RecreationMilestone;
exports.RecreationMilestoneModel = (0, typegoose_1.getModelForClass)(RecreationMilestone, {
    schemaOptions: { timestamps: true },
});

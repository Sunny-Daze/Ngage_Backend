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
exports.TrainingTaskModel = exports.TrainingTask = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const traning_model_1 = require("../traning.model");
class TrainingTask {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => traning_model_1.Training }),
    __metadata("design:type", Object)
], TrainingTask.prototype, "trainingId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], TrainingTask.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], TrainingTask.prototype, "desc", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], TrainingTask.prototype, "userPoints", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], TrainingTask.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], TrainingTask.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], TrainingTask.prototype, "isDeleted", void 0);
exports.TrainingTask = TrainingTask;
exports.TrainingTaskModel = (0, typegoose_1.getModelForClass)(TrainingTask, {
    schemaOptions: { timestamps: true },
});

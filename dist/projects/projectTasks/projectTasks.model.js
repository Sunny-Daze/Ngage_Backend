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
exports.ProjectTaskModel = exports.ProjectTask = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_model_1 = require("../../auth/User.model");
const project_model_1 = require("../project.model");
class ProjectTask {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => project_model_1.Project }),
    __metadata("design:type", Object)
], ProjectTask.prototype, "projectId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "desc", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "cost", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 'LOW' }),
    __metadata("design:type", String)
], ProjectTask.prototype, "priority", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "notes", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Date)
], ProjectTask.prototype, "deadline", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Array)
], ProjectTask.prototype, "assignTo", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], ProjectTask.prototype, "assignBy", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], ProjectTask.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], ProjectTask.prototype, "isDeleted", void 0);
exports.ProjectTask = ProjectTask;
exports.ProjectTaskModel = (0, typegoose_1.getModelForClass)(ProjectTask, {
    schemaOptions: { timestamps: true },
});

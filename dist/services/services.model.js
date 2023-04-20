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
exports.ServiceModel = exports.Service = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const project_model_1 = require("../projects/project.model");
const User_model_1 = require("../auth/User.model");
class Service {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => project_model_1.Project }),
    __metadata("design:type", Object)
], Service.prototype, "projectId", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "projectName", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "projectDesc", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "projectIntro", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "projectbg", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "objective", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Service.prototype, "problem", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Date)
], Service.prototype, "submission", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Number)
], Service.prototype, "budget", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], Service.prototype, "reference", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", Array)
], Service.prototype, "resources", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], Service.prototype, "createdBy", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true }),
    __metadata("design:type", Boolean)
], Service.prototype, "isActive", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Service.prototype, "isDeleted", void 0);
exports.Service = Service;
exports.ServiceModel = (0, typegoose_1.getModelForClass)(Service, {
    schemaOptions: { timestamps: true },
});

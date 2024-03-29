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
exports.ProjectTaskUserMapModel = exports.ProjectTaskUserMap = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_model_1 = require("../../auth/User.model");
const projectTasks_model_1 = require("./projectTasks.model");
class ProjectTaskUserMap {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => projectTasks_model_1.ProjectTask }),
    __metadata("design:type", Object)
], ProjectTaskUserMap.prototype, "projectTaskId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], ProjectTaskUserMap.prototype, "user", void 0);
exports.ProjectTaskUserMap = ProjectTaskUserMap;
exports.ProjectTaskUserMapModel = (0, typegoose_1.getModelForClass)(ProjectTaskUserMap, {
    schemaOptions: { timestamps: true },
});

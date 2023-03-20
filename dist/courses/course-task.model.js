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
exports.CourseTaskModel = exports.CourseTask = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const prop_1 = require("@typegoose/typegoose/lib/prop");
const User_model_1 = require("../auth/User.model");
class CourseTask {
}
__decorate([
    (0, prop_1.prop)(),
    __metadata("design:type", String)
], CourseTask.prototype, "title", void 0);
__decorate([
    (0, prop_1.prop)(),
    __metadata("design:type", String)
], CourseTask.prototype, "priority", void 0);
__decorate([
    (0, prop_1.prop)(),
    __metadata("design:type", String)
], CourseTask.prototype, "body", void 0);
__decorate([
    (0, prop_1.prop)(),
    __metadata("design:type", String)
], CourseTask.prototype, "internalNote", void 0);
__decorate([
    (0, prop_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], CourseTask.prototype, "cost", void 0);
__decorate([
    (0, prop_1.prop)({ ref: () => User_model_1.User }),
    __metadata("design:type", Object)
], CourseTask.prototype, "user", void 0);
exports.CourseTask = CourseTask;
exports.CourseTaskModel = (0, typegoose_1.getModelForClass)(CourseTask, {
    schemaOptions: { timestamps: true },
});

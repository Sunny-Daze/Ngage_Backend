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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const User_model_1 = require("./User.model");
const JWT_1 = require("../utils/middleware/JWT");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let { email } = req.body;
    const user = yield User_model_1.UserModel.findOne({ email: email });
    if (user) {
        const encpass = crypto_js_1.default.AES.decrypt(user.password, (_a = process.env.ENCWORD) !== null && _a !== void 0 ? _a : "").toString();
        if (user.password == encpass) {
            let userWithToken = user;
            userWithToken.accessToken = (0, JWT_1.createAccessToken)(user.id, user.role);
            res
                .status(201)
                .json({ success: true, result: user, message: "Logged in" });
        }
        else {
            res
                .status(201)
                .json({ success: false, message: "Invalid email or password" });
        }
    }
    else {
        res.status(401).json({ success: false, message: "User Not Exists" });
    }
});
exports.login = login;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    let { email, password, fullName, phone, countryCode, role } = req.body;
    let user = yield User_model_1.UserModel.findOne({ email: email, phone: phone });
    if (user) {
        res.status(401).json({
            success: false,
            message: "User Already Exists with this email and password",
        });
    }
    else {
        const encpass = crypto_js_1.default.AES.encrypt(password, (_b = process.env.ENCWORD) !== null && _b !== void 0 ? _b : '').toString();
        if (user) {
            res.status(201).json({
                success: true,
                message: "User has been created",
                result: user,
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "unable to create user",
            });
        }
    }
});
exports.signup = signup;

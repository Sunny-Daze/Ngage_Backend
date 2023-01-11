import CryptoJS from "crypto-js";
import { UserModel } from "./User.model";
import { Response } from "express";
import { createAccessToken } from "../utils/middleware/JWT";



export const login = async (req: any, res: Response) => {
  let { email } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) {
    const encpass = CryptoJS.AES.decrypt(
      user.password,
      process.env.ENCWORD??""
    ).toString();

    if (user.password == encpass) {
      let userWithToken: any = user;
      userWithToken.accessToken = createAccessToken(user.id, user.role);

      res
        .status(201)
        .json({ success: true, result: userWithToken, message: "Logged in" });
    } else {
      res
        .status(201)
        .json({ success: false, message: "Invalid email or password" });
    }
  } else {
    res.status(401).json({ success: false, message: "User Not Exists" });
  }
};

export const signup = async (req: any, res: Response) => {
  let { email, password, fullName, phone, countryCode, role } = req.body;

  let user = await UserModel.findOne({ email: email, phone: phone });
  if (user) {
    res.status(401).json({
      success: false,
      message: "User Already Exists with this email and password",
    });
  } else {
    const encpass = CryptoJS.AES.encrypt(
      password,
      process.env.ENCWORD??''
    ).toString();

    // user = await UserModel.create({ email });

    if (user) {
      res.status(201).json({
        success: true,
        message: "User has been created",
        result: user,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "unable to create user",
      });
    }
  }
};

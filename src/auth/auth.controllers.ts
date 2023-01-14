import bcrypt from "bcrypt";
import { UserModel } from "./User.model";
import { Request, Response } from "express";
import { createAccessToken } from "../utils/middleware/JWT";

export const login = async (req: any, res: Response) => {
  let { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
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

export const signup = async (req: Request, res: Response) => {
  const { email, password, fullName, phone, countryCode, role } = req.body;

  let user = await UserModel.findOne({ email: email, phone: phone });

  if (user) {
    res.status(401).json({
      success: false,
      message: "User Already Exists with this email and password",
    });
  } else {
    const encpass = bcrypt.hashSync(password, 1);

    user = await UserModel.create({
      email,
      password: encpass,
      countryCode,
      phone,
      fullName,
      role,
    });

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

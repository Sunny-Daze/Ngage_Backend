import { Request, Response } from "express";
import { UserModel } from "../../auth/User.model";
import { RecreationModel } from "../recreation.model";
import {
  RecreationMilestone,
  RecreationMilestoneModel,
} from "../recreationMilestone/recreationMileStone.model";
import { RecreationUserMapModel } from "./recreationUserMap.model";

export const joinRecreation = async (req: any, res: Response) => {
  let { recreationId, user } = req.body;
  try {
    let recreation = await RecreationUserMapModel.create({
      user,
      recreationId,
    });
    if (recreation) {
      res.status(201).json({
        success: true,
        message: "User joined to recreation",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed User joined to recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed User joined to recreation",
      error,
    });
  }
};

export const updateUserrecreationMilestoneStatus = async (
  req: any,
  res: Response
) => {
  let { milestoneId, user, status, userPoints } = req.body;
  try {
    let recreation = await RecreationUserMapModel.findOneAndUpdate(
      {
        milestoneId,
        user,
      },
      {
        status,
      }
    );
    if (recreation) {
      if (status) {
        await UserModel.findByIdAndUpdate(user, {
          $inc: {
            userPoints: userPoints,
          },
        });
      }
      res.status(201).json({
        success: true,
        message: "User joined to recreation",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed User joined to recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed User joined to recreation",
      error,
    });
  }
};

export const fetchedUsersRecreation = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let userRecreations: Array<any> = [];
    let mappedData = await RecreationUserMapModel.find({ user: user });

    if (mappedData) {
      for await (const rec of mappedData) {
        let recreation = await RecreationModel.findById(rec._id);
        let milestone = await RecreationMilestoneModel.find(recreation?._id);
        recreation!.milestones = milestone ? milestone : [];
        userRecreations.push(recreation);
      }
    }

    if (userRecreations) {
      res.status(201).json({
        success: true,
        message: "Fetched Users Recreation",
        result: userRecreations,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed User joined to recreation",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed User joined to recreation",
      error,
    });
  }
};

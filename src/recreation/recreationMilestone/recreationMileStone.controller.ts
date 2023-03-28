import { RecreationMilestoneModel } from "./recreationMileStone.model";
import { Request, Response } from "express";
import { RecreationMilestoneUserMapModel } from "./milestoneUserMap.model";
import { UserModel } from "../../auth/User.model";

export const createRecreationMileStone = async (req: any, res: Response) => {
  let { recreationId, title, desc, userPoints } = req.body;
  try {
    let mileStone = await RecreationMilestoneModel.create({
      recreationId: recreationId,
      title: title,
      desc: desc,
      userPoints: userPoints,
    });
    if (mileStone) {
      res.status(201).json({
        success: true,
        message: "Recreation milestone created",
        result: mileStone,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create recreation milestone",
        result: mileStone,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to create recreation  milestone",
      error,
    });
  }
};

export const updateRecreationMileStone = async (req: any, res: Response) => {
  let { recreationMileStoneId, title, desc, userPoints } = req.body;
  try {
    let mileStone = await RecreationMilestoneModel.findByIdAndUpdate(
      recreationMileStoneId,
      {
        title: title,
        desc: desc,
        userPoints: userPoints,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (mileStone) {
      res.status(201).json({
        success: true,
        message: "Recreation milestone updated",
        result: mileStone,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update recreation milestone",
        result: mileStone,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to update recreation  milestone",
      error,
    });
  }
};

export const deleteRecreationMileStone = async (req: any, res: Response) => {
  let { recreationMileStoneId } = req.body;
  try {
    let mileStone = await RecreationMilestoneModel.findByIdAndUpdate(
      recreationMileStoneId,
      {
        isDeleted: true,
        isActive: false,
      }
    );
    if (mileStone) {
      res.status(201).json({
        success: true,
        message: "Recreation milestone created",
        result: mileStone,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create recreation milestone",
        result: mileStone,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to create recreation  milestone",
      error,
    });
  }
};

export const completeRecreationMileStone = async (req: any, res: Response) => {
  let { recreationMileStoneId, user } = req.body;
  try {
    let updatedData = RecreationMilestoneUserMapModel.create({
      user,
      recreationMileStoneId,
    });

    let points = await RecreationMilestoneModel.findById(recreationMileStoneId)
      

    await UserModel.findByIdAndUpdate(user, {
      $inc: {
        userPoints: points!.userPoints,
      },
    });

    if (updatedData) {
      res.status(201).json({
        success: true,
        result: updatedData,
      });
    } else {
      res.status(201).json({
        success: false,
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

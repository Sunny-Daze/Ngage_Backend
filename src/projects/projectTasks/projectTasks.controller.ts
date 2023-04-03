import { TrainingTaskModel } from "./projectTasks.model";
import { Request, Response } from "express";
import { TrainingTaskUserMapModel } from "./projectTasksUserMap";
import { UserModel } from "../../auth/User.model";

export const createTrainingTask = async (req: any, res: Response) => {
  let { trainingId, title, desc, userPoints } = req.body;
  try {
    let trainingTask = await TrainingTaskModel.create({
      trainingId: trainingId,
      title: title,
      desc: desc,
      userPoints: userPoints,
    });
    if (trainingTask) {
      res.status(201).json({
        success: true,
        message: "Recreation trainingTask created",
        result: trainingTask,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create training task",
        result: null,
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

export const updateTrainingTask = async (req: any, res: Response) => {
  let { trainingTaskId, title, desc, userPoints } = req.body;
  try {
    let trainingTask = await TrainingTaskModel.findByIdAndUpdate(
      trainingTaskId,
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

    if (trainingTask) {
      trainingTask = await TrainingTaskModel.findById(trainingTaskId);
      res.status(201).json({
        success: true,
        message: "trainingTask updated",
        result: trainingTask,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update recreation milestone",
        result: null,
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

export const deleteTrainingTask = async (req: any, res: Response) => {
  let { trainingTaskId } = req.body;
  try {
    let trainingTask = await TrainingTaskModel.findByIdAndUpdate(
      trainingTaskId,
      {
        isDeleted: true,
        isActive: false,
      }
    );
    if (trainingTask) {
      res.status(201).json({
        success: true,
        message: "Training TrainingTask created",
        result: trainingTask,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to delete Training task",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to delete recreation  milestone",
      error,
    });
  }
};

export const completeTraningTask = async (req: any, res: Response) => {
  let { trainingTaskId, user } = req.body;
  try {
    let trainingTask = await TrainingTaskUserMapModel.create({
      trainingTaskId,
      user,
    });
    if (trainingTask) {
      let userPoint = await TrainingTaskModel.findById(trainingTaskId);

      await UserModel.findByIdAndUpdate(user, {
        $inc: {
          userPoints: userPoint?.userPoints,
        },
      });
      res.status(201).json({
        success: true,
        message: "Training TrainingTask created",
        result: trainingTask,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to delete Training task",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to delete recreation  milestone",
      error,
    });
  }
};

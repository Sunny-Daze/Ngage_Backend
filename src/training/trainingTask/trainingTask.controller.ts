import { TrainingTaskModel } from "./trainingTask.model";
import { Request, Response } from "express";

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
  let { trainingTaskId, } = req.body;
  try {
    let trainingTask = await TrainingTaskModel.findByIdAndUpdate(trainingTaskId,{
      isDeleted: true,
      isActive : false

    });
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

import { Request, Response } from "express";
import { TrainingModel } from "./traning.model";
import {
  TrainingTask,
  TrainingTaskModel,
} from "./trainingTask/trainingTask.model";
import { TrainingTaskUserMapModel } from "./trainingTask/trainingTaskUserMap";
import { TrainingUserMapModel } from "./trainingUserMap.model";

export const fetchTrainings = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let training = await TrainingModel.find({
      isActive: true,
      isDeleted: false,
    }).populate("createdBy", { userName: 1 });

    for await (const train of training) {
      let tasks = await TrainingTaskModel.find({
        isDeleted: false,
        isActive: true,
        trainingId: train._id,
      });

      for await (const tk of tasks) {
        let taskStatus = await TrainingTaskUserMapModel.findOne({
          user,
          trainingTaskId: tk._id,
        });
        tk.status = taskStatus ? true : false;
      }

      // Check For Participated
      let participated = await TrainingUserMapModel.findOne({
        user,
        trainingId: train._id,
      });
      train.participated = participated ? true : false;

      train.tasks = tasks;
    }

    if (training) {
      res.status(201).json({
        success: true,
        message: "training Fetched",
        result: training,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch Training",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch Training",
      error,
    });
  }
};

export const createTraining = async (req: any, res: Response) => {
  let { title, desc, user } = req.body;
  try {
    let training = await TrainingModel.create({
      title: title,
      desc: desc,
      createdBy: user,
    });

    if (training) {
      let newtraining = await TrainingModel.findById(training.id).populate(
        "createdBy",
        { userName: 1 }
      );
      res.status(201).json({
        success: true,
        message: "Training Created",
        result: newtraining,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create recreation",
        result: training,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to create recreation",
      error,
    });
  }
};

export const updateTraining = async (req: any, res: Response) => {
  let { trainingId, title, desc, user } = req.body;
  try {
    let training = await TrainingModel.findByIdAndUpdate(
      trainingId,
      {
        title: title,
        desc: desc,
        createdBy: user,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    training = await TrainingModel.findById(trainingId).populate("createdBy", {
      userName: 1,
    });
    if (training) {
      res.status(201).json({
        success: true,
        message: "training Updated",
        result: training,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update training",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to update training",
      error,
    });
  }
};

export const deleteTraining = async (req: any, res: Response) => {
  let { trainingId } = req.body;
  try {
    let training = await TrainingModel.findByIdAndUpdate(trainingId, {
      isActive: false,
      isDeleted: true,
    });
    if (training) {
      res.status(201).json({
        success: true,
        message: "training Deleted",
        result: training,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to Delete training",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to Delete training",
      error,
    });
  }
};

export const enrolForTraining = async (req: any, res: Response) => {
  let { trainingId, user } = req.body;
  try {
    let training = await TrainingUserMapModel.create({
      trainingId,
      user,
    });
    if (training) {
      res.status(201).json({
        success: true,
        message: "training Deleted",
        result: training,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to Delete training",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to Delete training",
      error,
    });
  }
};

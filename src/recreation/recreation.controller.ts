import { Request, Response } from "express";
import { RecreationModel } from "./recreation.model";
import { RecreationMilestoneUserMapModel } from "./recreationMilestone/milestoneUserMap.model";
import {
  RecreationMilestone,
  RecreationMilestoneModel,
} from "./recreationMilestone/recreationMileStone.model";
import { RecreationUserMapModel } from "./recreationUserMap/recreationUserMap.model";

export const fetchRecreations = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let recreation = await RecreationModel.find({
      isActive: true,
      isDeleted: false,
    }).populate("createdBy", { userName: 1 });

    for await (const rec of recreation) {
      let participated = await RecreationUserMapModel.findOne({
        user,
        recreationId: rec._id,
      });

      rec.participated = participated ? true : false;

      let milestones = await RecreationMilestoneModel.find({
        isDeleted: false,
        isActive: true,
        recreationId: rec._id,
      });

      for await (const mile of milestones) {
        let status = await RecreationMilestoneUserMapModel.findOne({
          user,
          recreationMileStoneId: mile._id,
        });

        mile.status = status ? true : false;
      }

      rec.milestones = milestones;
    }

    if (recreation) {
      res.status(201).json({
        success: true,
        message: "Recreation Fetched",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch recreation",
      error,
    });
  }
};

export const createRecreation = async (req: any, res: Response) => {
  let { title, desc, user } = req.body;
  try {
    let recreation = await RecreationModel.create({
      title: title,
      desc: desc,
      createdBy: user,
    });

    if (recreation) {
      let newRecreation = await RecreationModel.findById(
        recreation.id
      ).populate("createdBy", { userName: 1 });
      res.status(201).json({
        success: true,
        message: "Recreation Created",
        result: newRecreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create recreation",
        result: recreation,
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

export const updateRecreation = async (req: any, res: Response) => {
  let { recreationId, title, desc, user } = req.body;
  try {
    let recreation = await RecreationModel.findByIdAndUpdate(
      recreationId,
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
    recreation = await RecreationModel.findById(recreationId).populate(
      "createdBy",
      { userName: 1 }
    );
    if (recreation) {
      res.status(201).json({
        success: true,
        message: "Recreation Updated",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to update recreation",
      error,
    });
  }
};

export const deleteRecreation = async (req: any, res: Response) => {
  let { recreationId } = req.body;
  try {
    let recreation = await RecreationModel.findByIdAndUpdate(recreationId, {
      isActive: false,
      isDeleted: true,
    });
    if (recreation) {
      res.status(201).json({
        success: true,
        message: "Recreation Deleted",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to Delete recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to Delete recreation",
      error,
    });
  }
};

export const fetchRecreationsForUser = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let recreation = await RecreationModel.find({
      isActive: true,
      isDeleted: false,
    });

    for await (const rec of recreation) {
      let milestones = await RecreationMilestoneModel.find({
        isDeleted: false,
        isActive: false,
      });

      for await (const mile of milestones) {
        let userStatus = await RecreationUserMapModel.findOne({
          milestone: mile._id,
          user: user,
        }).status;

        mile.status = userStatus.status;
      }
    }

    if (recreation) {
      res.status(201).json({
        success: true,
        message: "Recreation Fetched",
        result: recreation,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch recreation",
        result: recreation,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch recreation",
      error,
    });
  }
};

import { Request, Response } from "express";
import { RecreationModel } from "./recreation.model";

export const fetchRecreations = async (req: any, res: Response) => {
  try {
    let recreation = await RecreationModel.find({
      isActive: true,
      isDeleted: false,
    }).populate('');
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
      res.status(201).json({
        success: true,
        message: "Recreation Created",
        result: recreation,
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
    let recreation = await RecreationModel.findByIdAndUpdate(recreationId, {
      title: title,
      desc: desc,
      createdBy: user,
    });
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

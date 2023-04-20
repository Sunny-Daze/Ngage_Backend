import { Request, Response } from "express";
import { ServiceModel } from "./services.model";

export const fetchServices = async (req: Request, res: Response) => {
  let {} = req.body;
  try {
    let service = await ServiceModel.find({
      isDeleted: false,
      isActive: true,
    });
    if (service) {
      res.status(201).json({
        success: true,
        result: service,
      });
    } else {
      res.status(201).json({
        success: false,
        result: service,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const createService = async (req: Request, res: Response) => {
  let {
    firstName,
    lastName,
    address,
    phone,
    projectName,
    projectDesc,
    projectIntro,
    projectbg,
    objective,
    problem,
    submission,
    budget,
    reference,
    resources,
  } = req.body;
  try {
    let service = await ServiceModel.create({
        firstName,
        lastName,
        address,
        phone,
        projectName,
        projectDesc,
        projectIntro,
        projectbg,
        objective,
        problem,
        submission,
        budget,
        reference,
        resources, 
    });
    if (service) {
      res.status(201).json({
        success: true,
        result: service,
      });
    } else {
      res.status(201).json({
        success: false,
        result: service,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const editService = async (req: Request, res: Response) => {
    let {
        serviceId,
        firstName,
        lastName,
        address,
        phone,
        projectName,
        projectDesc,
        projectIntro,
        projectbg,
        objective,
        problem,
        submission,
        budget,
        reference,
        resources,
      } = req.body;  try {
    let service = await ServiceModel.findByIdAndUpdate(serviceId, {
            firstName,
            lastName,
            address,
            phone,
            projectName,
            projectDesc,
            projectIntro,
            projectbg,
            objective,
            problem,
            submission,
            budget,
            reference,
            resources,
    });
    if (service) {
      res.status(201).json({
        success: true,
        result: service,
      });
    } else {
      res.status(201).json({
        success: false,
        result: service,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  let { serviceId } = req.body;
  try {
    let service = await ServiceModel.findByIdAndUpdate(serviceId, {
      isDeleted : true,
      isActive : false
    });
    if (service) {
      res.status(201).json({
        success: true,
        result: service,
      });
    } else {
      res.status(201).json({
        success: false,
        result: service,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

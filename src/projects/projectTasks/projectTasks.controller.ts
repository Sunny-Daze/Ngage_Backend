import { Request, Response } from "express";
import { ProjectTaskModel } from "./projectTasks.model";

export const createProjectTask = async (req: Request, res: Response) => {
  let {
    projectId,
    title,
    desc,
    cost,
    user,
    priority,
    deadline,
    note,
    assignedTo,
  } = req.body;
  try {
    let projectTask = await ProjectTaskModel.create({
      projectId,
      title,
      desc,
      createdBy: user,
      priority,
      note,
      deadline,
      cost,
      assignedTo,
    });
    if (projectTask) {
      res.status(201).json({
        success: true,
        result: projectTask,
      });
    } else {
      res.status(201).json({
        success: false,
        result: projectTask,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const editProjectTask = async (req: Request, res: Response) => {
  let {
    taskId,
    title,
    desc,
    cost,
    user,
    priority,
    deadline,
    note,
    assignedTo,
  } = req.body;
  try {
    let projectTask = await ProjectTaskModel.findByIdAndUpdate(
      taskId,
      {
        title,
        desc,
        createdBy: user,
        priority,
        note,
        deadline,
        cost,
        assignedTo,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (projectTask) {
      res.status(201).json({
        success: true,
        result: projectTask,
      });
    } else {
      res.status(201).json({
        success: false,
        result: projectTask,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

import { Request, Response } from "express";
import { ProjectTaskModel } from "./projectTasks.model";

export const createProjectTask = async (req: Request, res: Response) => {
  let { title, desc, cost, user, priority, deadline, note, assignedTo } =
    req.body;
  try {
    let projectTask = await ProjectTaskModel.create({
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

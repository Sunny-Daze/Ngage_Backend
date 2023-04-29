import { ProjectModel } from "./project.model";
import { Request, Response } from "express";
import { ProjectTaskModel } from "./projectTasks/projectTasks.model";

export const createProject = async (req: Request, res: Response) => {
  let { title, desc, createdBy, cost, user } = req.body;
  try {
    let project = await ProjectModel.create({
      title,
      desc,
      createdBy: user,
    });
    if (project) {
      res.status(201).json({
        success: true,
        result: project,
      });
    } else {
      res.status(201).json({
        success: false,
        result: project,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const editProject = async (req: Request, res: Response) => {
  let { projectId, title, desc, createdBy } = req.body;
  try {
    let project = await ProjectModel.findByIdAndUpdate(projectId, {
      title,
      desc,
      createdBy,
    });
    if (project) {
      res.status(201).json({
        success: true,
        message: "project edited",
        result: project,
      });
    } else {
      res.status(201).json({
        success: false,
        result: project,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  let { projectId } = req.body;
  try {
    let project = await ProjectModel.findByIdAndUpdate(projectId, {
      isDeleted: true,
      isActive: false,
    });
    if (project) {
      res.status(201).json({
        success: true,
        result: project,
      });
    } else {
      res.status(201).json({
        success: false,
        result: project,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const fetchProject = async (req: Request, res: Response) => {
  try {
    let projects = await ProjectModel.find({
      isDeleted: false,
      isActive: true,
    }).populate("createdBy", { userName: 1 });

    for await (const project of projects) {
      let tasks = await ProjectTaskModel.find({
        projectId: project._id,
        isActive: true,
        isDeleted: false,
      });

      project.tasks = tasks;
    }

    if (projects) {
      res.status(201).json({
        success: true,
        result: projects,
      });
    } else {
      res.status(201).json({
        success: false,
        result: projects,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const fetchProjectById = async (req: Request, res: Response) => {
  let { id } = req.body;
  try {
    let project = await ProjectModel.findById(id).populate("createdBy", {
      userName: 1,
    });

    if (project) {
      let tasks = await ProjectTaskModel.find({
        projectId: project?._id,
        isActive: true,
        isDeleted: false,
      });
      project.tasks = tasks ?? [];
    }
    if (project) {
      res.status(201).json({
        success: true,
        result: project,
      });
    } else {
      res.status(201).json({
        success: false,
        result: project,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const fetchProjectNames = async (req: Request, res: Response) => {
  try {
    let projects = await ProjectModel.find(
      {
        isDeleted: false,
        isActive: true,
      },
      {
        title: 1,
      }
    );
    if (projects) {
      res.status(201).json({
        success: true,
        result: projects,
      });
    } else {
      res.status(201).json({
        success: false,
        result: projects,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

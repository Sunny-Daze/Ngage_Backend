import { Request, Response } from "express";

export const createPost = async (req: any, res: Response) => {
  console.log(req.body);
};

import { Request, Response } from "express";

export type ControllerMethod = (
  request: Request,
  res: Response
) => Promise<void> | void;

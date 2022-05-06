import { NextFunction, Request, Response } from "express";


export interface ICreateFeedbackController {
  handle(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
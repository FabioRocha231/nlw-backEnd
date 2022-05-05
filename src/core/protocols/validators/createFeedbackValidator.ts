import { NextFunction, Request, Response } from "express";



export interface ICreateFeedbackValidator {
  validate(req: Request, res: Response, next: NextFunction): Response | void;
}
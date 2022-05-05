import { Request, Response } from "express";


export interface ICreateFeedbackController {
  handle(req: Request, res: Response): Promise<Response>;
}
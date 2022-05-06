import { NextFunction, Request, Response } from "express";
import { ICreateFeedbackController } from "../core/protocols/controllers/createFeedbackController";
import { CreateFeedbackService } from "../services/createFeedbackService";

export class CreateFeedbackController implements ICreateFeedbackController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { type, comment, screenshot } = req.body;
    const db = new CreateFeedbackService();
    await db.save(type, comment, screenshot);
    next();
  }
}

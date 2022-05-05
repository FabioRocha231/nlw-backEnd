import { Request, Response } from "express";
import { ICreateFeedbackController } from "../core/protocols/controllers/createFeedbackController";
import { CreateFeedbackService } from "../services/CreateFeedbackController";


export class CreateFeedbackController implements ICreateFeedbackController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {type, comment, screenshot} = req.body
    const db = new CreateFeedbackService()
    await db.save(type, comment, screenshot)
    return res.json({message: "Post created"})
  }
}
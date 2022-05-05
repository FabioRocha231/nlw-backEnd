import { Request, Response } from "express";
import { ICreateFeedbackController } from "../core/protocols/controllers/createFeedbackController";


export class CreateFeedbackController implements ICreateFeedbackController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {type, comment, screenshot} = req.body
    console.log({comment, screenshot, type})
    return res.json({message: "Post created"})
  }
}
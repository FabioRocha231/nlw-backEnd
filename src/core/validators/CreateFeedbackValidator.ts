import { NextFunction, Request, Response } from "express";
import { ICreateFeedbackValidator } from "../protocols/validators/createFeedbackValidator";



export class FeedbackValidator implements ICreateFeedbackValidator {
  validate(req: Request, res:Response, next: NextFunction ): Response | void {
    const {type, comment, screenshot} = req.body
    if(!type && !comment) 
      return res.status(406).json({message: "Type and comment are required"})
    
    if(!type) 
      return res.status(406).json({message: "Type is required"})
      
    if(!comment) 
      return res.status(406).json({message: "Comment is required"})
    next()
  }
}
import { Request, Response } from "express";

export interface IMailerMiddleware {
  send(req: Request, res: Response): Promise<Response>
}
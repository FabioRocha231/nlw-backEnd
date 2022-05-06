import { Request, Response } from "express";

export interface IMailerService {
  send(req: Request, res: Response): Promise<Response>
}
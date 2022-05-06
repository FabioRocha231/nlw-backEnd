import { Request, Response } from "express";
import { IMailerService } from "../core/protocols/services/mailerService";
import { ErrorHandler } from "../core/utils/errorHandler";
import { TransportService } from "./transportService";


export class MailerService implements IMailerService {
  async send(req: Request, res: Response): Promise<Response> {
    const { type, comment, screenshot } = req.body;
    const transportHandler = new TransportService();    
    const {errorHandler} = new ErrorHandler()
    const [error, result] = await errorHandler(transportHandler.sendMail(type, comment, screenshot))
    if(!error) return res.sendStatus(201);
    return res.sendStatus(500)
  }
}

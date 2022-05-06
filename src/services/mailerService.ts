import { Request, Response } from "express";
import { IMailerService } from "../core/protocols/services/mailerService";
import { TransportService } from "./transportService";


export class MailerService implements IMailerService {
  async send(req: Request, res: Response): Promise<Response> {
    const { type, comment, screenshot } = req.body;
    const transportHandler = new TransportService();    
    await transportHandler.sendMail(type, comment, screenshot);
    return res.sendStatus(201);
  }
}

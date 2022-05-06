import { Request, Response } from "express";
import { IMailerMiddleware } from "../protocols/mailer";
import { transportHandler, TransportProps } from "./transport";

export class MailerMiddleware implements IMailerMiddleware {
  async send(req: Request, res: Response): Promise<Response> {
    const { type, comment, screenshot } = req.body;
    await transportHandler.sendMail({
      from: "Equipe Feedget <oi@feeedget.com>",
      to: "Fabio HR Filho <fabioharoldo1@gmail.com>",
      subject: "Feedback do usuário",
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });

    return res.sendStatus(201)
  }
}

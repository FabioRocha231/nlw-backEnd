import nodemailer from "nodemailer";

export class TransportService {
  async sendMail(
    type: string,
    comment: string,
    screenshot: string
  ): Promise<nodemailer.SentMessageInfo> {
    const transportHandler = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "764234748335c7",
        pass: "a1b2343393dfa4",
      },
    });

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
  }
}

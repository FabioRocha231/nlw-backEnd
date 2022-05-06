import nodemailer from "nodemailer"

export const transportHandler = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d62501bef6fcd6",
    pass: "baad95067aa011"
  }
});

export type TransportProps = typeof transportHandler
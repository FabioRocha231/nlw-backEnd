import { Router } from "express";
import { CreateFeedbackController } from "./controllers/createFeedbackController";
import { MailerMiddleware } from "./core/utils/mailer";
import { FeedbackValidator } from "./core/validators/CreateFeedbackValidator";

const routes = Router();

routes.post(
  "/feedbacks",
  new FeedbackValidator().validate,
  new CreateFeedbackController().handle,
  new MailerMiddleware().send
);

export { routes };

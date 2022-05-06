import { Router } from "express";
import { CreateFeedbackController } from "./controllers/createFeedbackController";
import { FeedbackValidator } from "./core/validators/CreateFeedbackValidator";
import { MailerService } from "./services/mailerService";

const routes = Router();

routes.post(
  "/feedbacks",
  new FeedbackValidator().validate,
  new CreateFeedbackController().handle,
  new MailerService().send
);

export { routes };

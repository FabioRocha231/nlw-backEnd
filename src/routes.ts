import { Router } from "express";
import { CreateFeedbackController } from "./controllers/createFeedbackController";
import { FeedbackValidator } from "./core/validators/CreateFeedbackValidator";

const routes = Router();

routes.post(
  "/feedbacks",
  new FeedbackValidator().validate,
  new CreateFeedbackController().handle
);

export { routes };

import { ICreateFeedbackService } from "../core/protocols/services/CreateFeedbackService";

export class CreateFeedbackService implements ICreateFeedbackService {
  async save(
    type: string,
    comment: string,
    screenshot?: string
  ): Promise<void> {
    console.log({ comment, screenshot, type });
  }
}

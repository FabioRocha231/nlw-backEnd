import { ICreateFeedbackService } from "../core/protocols/services/createFeedbackService";
import { ErrorHandler } from "../core/utils/errorHandler";
import { prisma } from "../core/utils/prisma";



export class CreateFeedbackService implements ICreateFeedbackService {
  async save(
    type: string,
    comment: string,
    screenshot?: string
  ): Promise<void> {
    const {errorHandler} = new ErrorHandler()
    const [error, result] = await errorHandler(prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    }))
    if (error) throw new Error(error)
    return result
  }
}



export interface ICreateFeedbackService {
  save(type: string, comment: string, screenshot?: string): Promise<void>
}
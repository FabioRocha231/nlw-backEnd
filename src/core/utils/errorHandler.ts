import { IErrorHandler } from "../protocols/errorHander";


export class ErrorHandler implements IErrorHandler {
  errorHandler = (promise: Promise<unknown>) =>
  promise.then((result) => [null, result]).catch((error) => [error]);
}
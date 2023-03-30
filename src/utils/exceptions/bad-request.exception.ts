import BaseError from './base.exception';

class BadRequestException extends BaseError {
  public statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }

  serializeErrors(): {
    message: string;
    field?: string | undefined;
  }[] {
    return [{ message: this.message }];
  }
}

export default BadRequestException;

import BaseError from '@/utils/exceptions/base.exception';

class NotFoundException extends BaseError {
  public statusCode = 400;
  constructor(public message: string = 'Route not found') {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
  }

  serializeErrors(): {
    message: string;
    field?: string | undefined;
  }[] {
    return [{ message: this.message }];
  }
}

export default NotFoundException;

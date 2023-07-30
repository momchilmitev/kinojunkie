import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

import { mongo } from 'mongoose';

@Catch(mongo.MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: mongo.MongoServerError, host: ArgumentsHost) {
    console.log('from filter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();

    let error;

    switch (exception.code) {
      case 11000: {
        error = {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'User with such email exsits!',
        };
        break;
      }
      default: {
        error = {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Error',
        };
        break;
      }
    }

    response.status(error.statusCode).json(error);
  }
}

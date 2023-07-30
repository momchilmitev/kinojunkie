import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Put,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.schema';
import { AuthGuard } from './auth.guard';
import { MongoExceptionFilter } from 'src/filters/mongo-exception.filter';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseFilters(MongoExceptionFilter)
  // @HttpCode(HttpStatus.OK)
  signUp(@Body() signInDto: User) {
    return this.authService.signUp(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() user: User) {
    return this.authService.signIn(user);
  }

  @UseGuards(AuthGuard)
  @Put('profile')
  getProfile(@Body() data) {
    return this.authService.updateProfile(data);
  }
}

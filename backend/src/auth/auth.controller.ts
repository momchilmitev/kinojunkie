import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.schema';
import { AuthGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  signUp(@Body() signInDto: User) {
    return this.authService.signUp(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() user: User) {
    return this.authService.signIn(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

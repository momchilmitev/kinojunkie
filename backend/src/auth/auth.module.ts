import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({ secret: jwtConstants.secret, global: true }),
  ],
  providers: [AuthService],
})
export class AuthModule {}

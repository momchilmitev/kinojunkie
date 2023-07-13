import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: User): Promise<User> {
    const createdUser = this.usersService.create(user);

    return createdUser;
  }

  async signIn(user: User): Promise<any> {
    const foundUser = await this.usersService.findByEmail(user);
    if (foundUser?.password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: foundUser._id,
      email: foundUser.email,
      username: foundUser.firstName + ' ' + foundUser.lastName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

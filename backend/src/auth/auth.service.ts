import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(user: User): Promise<User> {
    const createdUser = this.usersService.create(user);

    return createdUser;
  }

  async signIn(user: User): Promise<any> {
    const foundUser = await this.usersService.findByEmail(user);
    if (foundUser?.password !== user.password) {
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return foundUser;
  }
}

import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(user: User): Promise<User> {
    const createdUser = this.usersService.create(user);

    return createdUser;
  }
}

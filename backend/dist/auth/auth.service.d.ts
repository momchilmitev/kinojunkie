import { UsersService } from '../users/users.service';
import { User } from '../users/user.schema';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signUp(user: User): Promise<User>;
    signIn(user: User): Promise<any>;
}

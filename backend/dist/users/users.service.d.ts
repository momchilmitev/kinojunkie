import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    findByEmail(user: User): Promise<any | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
}

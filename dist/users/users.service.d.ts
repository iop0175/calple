import { User, UserDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { Payload } from './security/payload.interface';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: User): Promise<User>;
    findByIdAndPw(userid: string, password: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findByEmailAndName(email: string, name: string): Promise<User | null>;
    findPw(userid: string, email: string, name: string): Promise<User | null>;
    findById(userid: string): Promise<User | null>;
    tokenValidateUser(payload: Payload): Promise<User | null>;
}

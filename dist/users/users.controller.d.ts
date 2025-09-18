import { UsersService } from './users.service';
import { User } from './schema/users.schema';
import { JwtService } from '@nestjs/jwt';
import express from 'express';
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    create(user: User): Promise<User>;
    login(body: {
        userid: string;
        password: string;
    }): Promise<{
        success: boolean;
        message: string;
        accessToken?: undefined;
    } | {
        success: boolean;
        message: string;
        accessToken: string;
    }>;
    findid(body: {
        name: string;
        email: string;
    }): Promise<{
        success: boolean;
        message: string;
        userid?: undefined;
    } | {
        success: boolean;
        message: string;
        userid: string;
    }>;
    findpw(body: {
        userid: string;
        email: string;
        name: string;
    }): Promise<{
        success: boolean;
        message: string;
        userpw?: undefined;
    } | {
        success: boolean;
        message: string;
        userpw: string;
    }>;
    findAll(): Promise<User[]>;
    isAuthenticated(req: express.Request): any;
}

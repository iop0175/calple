import { Strategy, VerifiedCallback } from "passport-jwt";
import { UsersService } from "../users.service";
import { Payload } from "./payload.interface";
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithoutRequest] | [opt: import("passport-jwt").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: Payload, done: VerifiedCallback): Promise<any>;
}
export {};

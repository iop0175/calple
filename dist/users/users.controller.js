"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_schema_1 = require("./schema/users.schema");
const jwt_1 = require("@nestjs/jwt");
const user_guard_1 = require("./security/user.guard");
const express_1 = __importDefault(require("express"));
let UsersController = class UsersController {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async create(user) {
        return this.usersService.create(user);
    }
    async login(body) {
        const user = await this.usersService.findByIdAndPw(body.userid, body.password);
        if (!user) {
            return { success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' };
        }
        const payload = {
            userid: user.userid,
            name: user.name,
            email: user.email
        };
        return { success: true, message: '로그인 성공', accessToken: this.jwtService.sign(payload) };
    }
    async findid(body) {
        const user = await this.usersService.findByEmailAndName(body.email, body.name);
        if (!user) {
            return { success: false, message: '정보와 일치하는 아이디가 없습니다' };
        }
        return { success: true, message: '아이디 찾기 성공', userid: user.userid };
    }
    async findpw(body) {
        const user = await this.usersService.findPw(body.userid, body.email, body.name);
        if (!user) {
            return { success: false, message: '정보와 일치하는 정보가 없습니다' };
        }
        return { success: true, message: '비밀번호 찾기 성공', userpw: user.password };
    }
    async findAll() {
        return this.usersService.findAll();
    }
    isAuthenticated(req) {
        const user = req.user;
        return user;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('findid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findid", null);
__decorate([
    (0, common_1.Post)('findpw'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findpw", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('token'),
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "isAuthenticated", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], UsersController);
//# sourceMappingURL=users.controller.js.map
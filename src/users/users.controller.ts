import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schema/users.schema';
import { ok } from 'assert';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async create(@Body() user: User): Promise<User> {
    console.log(user);
    return this.usersService.create(user);
  }
  @Post('login')
  async login(@Body() body:{userid:string; password:string}){
    console.log(body);
    const user = await this.usersService.findByIdAndPw(body.userid,body.password);
    if(!user){
        return { success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' };
    }
    return { success: true, message: '로그인 성공', user };
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

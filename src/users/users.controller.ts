import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('add')
  async insertUser(@Body('name') userName: string) {
    const generatedId = await this.usersService.insertUser(userName);
    return { id: generatedId };
  }

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();
    return users as User[];
  }
}

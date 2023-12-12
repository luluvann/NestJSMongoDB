import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import { InsertUserDto } from 'src/dto/insert-user.dto';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async insertUser(@Body() user: InsertUserDto): Promise<User> {
    const generatedUser = await this.usersService.insertUser(user);
    return generatedUser;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.getAllUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id: ObjectId): Promise<User> {
    const user = await this.usersService.getUserById(id);
    return user;
  }
}

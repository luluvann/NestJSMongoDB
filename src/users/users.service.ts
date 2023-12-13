import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { ObjectId } from 'mongoose';

interface User {
  name: string;
}

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async insertUser(user: User): Promise<User> {
    return this.usersRepository.insertUser(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers();
  }

  async getUserById(id: ObjectId): Promise<User> {
    return this.usersRepository.getUserById(id);
  }
}

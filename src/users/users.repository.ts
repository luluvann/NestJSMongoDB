import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async insertUser(user: User): Promise<User> {
    const newUser = user;
    const res = await this.userModel.create(newUser);
    return res;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUserById(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}

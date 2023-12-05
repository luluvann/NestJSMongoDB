import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async insertUser(name: string) {
    const newUser = new this.userModel({
      name: name,
    });

    const result = await newUser.save();
    console.log(result);
    return result.id as number;
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users as User[];
  }
}

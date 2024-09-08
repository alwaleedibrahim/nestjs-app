import { Injectable } from '@nestjs/common';
import CreateUserDTO from './dto/createUser.dto';
import UpdateUserDTO from './dto/updateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/User';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async createUser(user: CreateUserDTO): Promise<User> {
    return await this.userModel.create(user);
  }

  async updateUser(id: string, update: UpdateUserDTO): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, update, { new: true });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}

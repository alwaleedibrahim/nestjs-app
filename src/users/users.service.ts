import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { v4 as uuid } from 'uuid';
import CreateUserDTO from './dto/createUser.dto';
import UpdateUserDTO from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  users: IUser[];
  constructor() {
    this.users = [];
  }
  getAllUsers(): IUser[] {
    return this.users;
  }

  getUser(id: string): IUser {
    return this.users.find((u) => u.id == id);
  }

  createUser(user: CreateUserDTO): IUser {
    const userIndex: number = this.users.push({ ...user, id: uuid() }) - 1;
    return this.users[userIndex];
  }

  updateUser(id: string, update: UpdateUserDTO): IUser {
    const userIndex: number = this.users.findIndex((u) => u.id == id);
    this.users[userIndex] = { ...this.users[userIndex], ...update };
    return this.users[userIndex];
  }

  deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex((u) => u.id == id);
    if (userIndex == -1) {
      return false;
    }
    this.users.splice(userIndex, 1);
    return true;
  }
}

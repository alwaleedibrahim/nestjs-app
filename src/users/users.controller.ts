import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './user.interface';
import CreateUserDTO from './dto/createUser.dto';
import UpdateUserDTO from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(): IUser[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param() { id }: any) {
    return this.userService.getUser(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param() { id }: any, @Body() user: UpdateUserDTO) {
    return this.userService.updateUser(id, user);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteUser(@Param() { id }: any) {
    return this.userService.deleteUser(id);
  }
}

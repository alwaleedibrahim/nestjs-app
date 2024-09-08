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
import CreateUserDTO from './dto/createUser.dto';
import UpdateUserDTO from './dto/updateUser.dto';
import { User } from './schema/User';

@Controller('users')
// @UsePipes(new ValidationPipe())
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: any): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  // @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDTO): Promise<User> {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param() { id }: any, @Body() user: UpdateUserDTO): Promise<User> {
    return this.userService.updateUser(id, user);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteUser(@Param() { id }: any): Promise<User> {
    return this.userService.deleteUser(id);
  }
}

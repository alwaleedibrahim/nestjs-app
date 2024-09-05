import { PartialType } from '@nestjs/mapped-types';
import CreateUserDTO from './createUser.dto';

export default class UpdateUserDTO extends PartialType(CreateUserDTO) {}

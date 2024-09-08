import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export default class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'name must be between 3 and 20 charachters' })
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  password: string;
}

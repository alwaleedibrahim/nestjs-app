import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export default class CreateOrderDTO {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  total: number;

  @IsNotEmpty()
  userId: string;
}

import { PartialType } from '@nestjs/mapped-types';
import CreateOrderDTO from './createOrder.dto';

export default class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}

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
import { OrdersService } from './orders.service';
import CreateOrderDTO from './dto/createOrder.dto';
import UpdateOrderDTO from './dto/updateOrder.dto';
import { Order } from './schema/Order';
@Controller('users/:userId/orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  getAllOrders(@Param('userId') userId: string): Promise<Order[]> {
    return this.orderService.getAllOrders(userId);
  }

  @Get(':id')
  getOrder(
    @Param('userId') userId: string,
    @Param('id') id: any,
  ): Promise<Order> {
    return this.orderService.getOrder(id, userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  // @UsePipes(new ValidationPipe())
  createOrder(
    @Param('userId') userId: string,
    @Body() order: CreateOrderDTO,
  ): Promise<Order> {
    return this.orderService.createOrder(order, userId);
  }

  @Patch(':id')
  updateOrder(
    @Param() { id }: any,
    @Param('userId') userId: string,
    @Body() order: UpdateOrderDTO,
  ): Promise<Order> {
    return this.orderService.updateOrder(id, order, userId);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteOrder(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ): Promise<Order> {
    return this.orderService.deleteOrder(id, userId);
  }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import CreateOrderDTO from './dto/createOrder.dto';
import UpdateOrderDTO from './dto/updateOrder.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schema/Order';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getAllOrders(userId: string): Promise<Order[]> {
    try {
      const orders = await this.orderModel.find({ userId: userId });
      if (!orders) {
        throw new NotFoundException();
      }
      return orders;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async getOrder(id: string, userId: string): Promise<Order> {
    try {
      const order = await this.orderModel.findOne({ _id: id, userId: userId });
      if (!order) {
        throw new NotFoundException('Order not found for this user');
      }
      return order;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async createOrder(order: CreateOrderDTO, userId: string): Promise<Order> {
    try {
      const newOrder = new this.orderModel({ ...order, userId });
      return await newOrder.save();
    } catch (e) {
      throw new InternalServerErrorException('Failed to create order');
    }
  }

  async updateOrder(
    id: string,
    update: UpdateOrderDTO,
    userId: string,
  ): Promise<Order> {
    try {
      const updatedOrder = await this.orderModel.findOneAndUpdate(
        { _id: id, userId: userId },
        update,
        { new: true },
      );
      if (!updatedOrder) {
        throw new NotFoundException(
          'Order not found or not owned by this user',
        );
      }
      return updatedOrder;
    } catch (e) {
      throw new InternalServerErrorException('Failed to update order');
    }
  }

  async deleteOrder(id: string, userId: string): Promise<Order> {
    try {
      const deletedOrder = await this.orderModel.findOneAndDelete({
        _id: id,
        userId: userId,
      });
      if (!deletedOrder) {
        throw new NotFoundException('Order not found');
      }
      return deletedOrder;
    } catch (e) {
      throw new InternalServerErrorException('Failed to delete order');
    }
  }
}

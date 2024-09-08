import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, orderSchema } from './schema/Order';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: orderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

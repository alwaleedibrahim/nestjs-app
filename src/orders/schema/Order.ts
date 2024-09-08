import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema()
export class Order {
  @Prop()
  quantity: number;
  @Prop()
  total: number;
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  userId: string;
}

export const orderSchema = SchemaFactory.createForClass(Order);

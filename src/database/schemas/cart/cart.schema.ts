import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Product } from '../product';
import { User } from '../user';

class CartItem {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  productId: Product;

  @Prop({ type: Number, default: 1, min: 1 })
  quantity: number;

  @Prop({
    type: [
      {
        size: String,
        price: Number,
      },
    ],
  })
  sizeOptions: Array<{ size: string; price: number }>;
}

@Schema({ timestamps: true })
export class Cart extends Document {
  @Prop({ type: [CartItem] })
  cartItems: CartItem[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: Number })
  totalCartPrice: number;

  @Prop({ type: Number })
  totalPriceAfterDiscount: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
export const CartModel = { name: 'Cart', schema: CartSchema };

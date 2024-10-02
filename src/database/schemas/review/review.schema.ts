import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Product } from '../product';
import { Vendor } from '../vendor';
import { User } from '../user';

@Schema({ timestamps: true })
export class Review extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', index: true })
  productId: Product;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', index: true })
  vendorId: Vendor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: String, required: true })
  review: string;

  @Prop({ type: Number, min: 1, max: 5, required: true })
  rating: number;
}

const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.index({ productId: 1 });
ReviewSchema.index({ vendorId: 1 });

export { ReviewSchema };
export const ReviewModel = { name: 'Review', schema: ReviewSchema };

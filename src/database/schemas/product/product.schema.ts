import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ProductCategory } from '../category';
import { Vendor } from '../vendor';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Product extends Document {
  @Prop({ type: String, required: true, index: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, index: true })
  vendorId: Vendor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  categoryId: ProductCategory;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: String, required: true })
  imageCover: string;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({
    type: [
      {
        size: String,
        price: Number,
      },
    ],
    required: true,
  })
  sizeOptions: Array<{ size: string; price: number }>;

  @Prop({ type: Number })
  discount: number;

  @Prop({ type: Boolean, default: true })
  isAvailable: boolean;

  @Prop({ type: Number, default: 0 })
  ratingsAverage: number;

  @Prop({ type: Number, default: 0 })
  ratingsCount: number;

  // Fields specific to restaurants or bakeries
  @Prop({ type: [String] })
  ingredients: string[];

  @Prop({
    type: {
      calories: Number,
      protein: Number,
      fats: Number,
      carbs: Number,
    },
  })
  nutritionInfo: Record<string, number>;

  @Prop({ type: Date })
  expiryDate: Date;

  // Dietary information
  @Prop({ type: Boolean, default: false })
  isVegan: boolean;

  @Prop({ type: Boolean, default: false })
  isVegetarian: boolean;

  @Prop({ type: Boolean, default: false })
  isGlutenFree: boolean;
}

const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ name: 1, vendorId: 1 });

ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'productId',
});

ProductSchema.virtual('category', {
  ref: 'ProductCategory',
  localField: 'categoryId',
  foreignField: '_id',
});

ProductSchema.virtual('vendor', {
  ref: 'Vendor',
  localField: 'vendorId',
  foreignField: '_id',
});

export { ProductSchema };
export const ProductModel = { name: 'Product', schema: ProductSchema };

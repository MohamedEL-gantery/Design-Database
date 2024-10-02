import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CategorySchema } from '../../base';

@Schema({ timestamps: true })
export class ProductCategory extends Document {}

const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);

ProductCategorySchema.add(CategorySchema);

ProductCategorySchema.index({ name: 1 });

export { ProductCategorySchema };

export const ProductCategoryModel = {
  name: 'ProductCategory',
  schema: ProductCategorySchema,
};

import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CategorySchema } from '../../base';

@Schema({ timestamps: true })
export class VendorCategory extends Document {}

const VendorCategorySchema = SchemaFactory.createForClass(VendorCategory);

VendorCategorySchema.add(CategorySchema);

VendorCategorySchema.index({ name: 1 });

export { VendorCategorySchema };

export const VendorCategoryModel = {
  name: 'VendorCategory',
  schema: VendorCategorySchema,
};

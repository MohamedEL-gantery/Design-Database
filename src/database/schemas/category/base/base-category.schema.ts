import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Category extends Document {
  @Prop({ type: String, required: true, index: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: String, required: true })
  icon: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

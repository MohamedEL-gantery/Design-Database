import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user';
import { VendorCategory } from '../category';

// BankAccountDetails sub-document schema for Vendor
class BankAccountDetails {
  @Prop({ type: String, required: true })
  accountNumber: string;

  @Prop({ type: String, required: true })
  bankName: string;

  @Prop({ type: String, required: true })
  routingNumber: string;
}

// Address sub-document schema for Vendor
class Address {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop({ type: String })
  alias: string;

  @Prop({ type: String, required: true })
  details: string;

  @Prop({
    type: String,
    required: true,
  })
  @Prop({ type: Array, required: true })
  phone: string[];

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String })
  postalCode: string;
}

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Vendor extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  userId = User;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VendorCategory',
      },
    ],
    required: true,
  })
  categoriesId: VendorCategory[];

  @Prop({ type: String })
  taxId: string;

  @Prop({ type: [Address], required: true })
  addresses: Address[];

  @Prop({ type: [BankAccountDetails], required: true })
  bankAccountDetails: BankAccountDetails[];

  @Prop({ type: [String], required: true })
  phones: string[];

  @Prop({ type: Number, default: 0 })
  ratingAverage: number;

  @Prop({ type: Number, default: 0 })
  ratingCount: number;

  @Prop({ type: Boolean, default: true })
  status: boolean;
}

const VendorSchema = SchemaFactory.createForClass(Vendor);

VendorSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

VendorSchema.virtual('categories', {
  ref: 'VendorCategory',
  localField: 'categoriesId',
  foreignField: '_id',
});

VendorSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'productId',
});

export { VendorSchema };

export const VendorModel = { name: 'Vendor', schema: VendorSchema };

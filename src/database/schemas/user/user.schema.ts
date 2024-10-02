import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { RoleType } from '../../../shared/contracts/enums';

class GeoLocation {
  @Prop({
    type: { type: String, default: 'Point', enum: ['Point'] },
    required: true,
  })
  type: string;

  @Prop({
    type: [Number],
    required: true,
  })
  coordinates: number[];
}

class Address {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop({
    type: GeoLocation,
  })
  location: GeoLocation;

  @Prop({ type: String })
  alias: string;

  @Prop({ type: String, required: true })
  details: string;

  @Prop({
    type: String,
    required: true,
  })
  @Prop({ type: [String] })
  phone: string[];

  @Prop({ type: String, required: true })
  city: string;
}

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User extends Document {
  @Prop({ type: String, minlength: 3, required: true })
  firstName: string;

  @Prop({ type: String, minlength: 3, required: true })
  lastName: string;

  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: String, unique: true, required: true })
  phoneNumber: string;

  @Prop({ type: String, minlength: 8, required: true })
  hashedPassword: string;

  @Prop({ type: [Number], enum: RoleType, default: RoleType.User })
  role: RoleType[];

  @Prop({ type: String, default: null })
  googleId: string;

  @Prop({ type: String, default: null })
  facebookId: string;

  @Prop({ type: String, default: null })
  appleId: string;

  @Prop({ type: String, default: null })
  hashedVerificationCode: string;

  @Prop({ type: Boolean, default: false })
  isVerifiedVerificationCode: boolean;

  @Prop({ type: Date, default: null })
  VerificationCodeVerifiedAt: Date;

  @Prop({ type: Date, default: null })
  PasswordResetAt: Date;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;

  @Prop({ type: [Address], default: [] })
  address: Address[];

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: [],
  })
  wishlist: mongoose.Schema.Types.ObjectId[];
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'userId',
});

export { UserSchema };
export const UserModel = { name: 'User', schema: UserSchema };

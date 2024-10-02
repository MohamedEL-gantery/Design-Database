import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Session extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  })
  userId: User;

  @Prop({ type: String, index: true, required: true })
  refreshTokenHash: string;

  @Prop({ type: String, index: true, required: true })
  accessTokenHash: string;
}

const SessionSchema = SchemaFactory.createForClass(Session);

SessionSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

export { SessionSchema };
export const SessionModel = { name: 'Session', schema: SessionSchema };

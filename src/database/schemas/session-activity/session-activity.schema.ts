import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Session } from '../session';
import { User } from '../user';

@Schema({ timestamps: true })
export class SessionActivity extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
    index: true,
  })
  sessionId: Session;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  userId: User;

  @Prop({ type: Date, default: null })
  lastLoginAt: Date;

  @Prop({ type: Date, default: null })
  lastLogoutAt: Date;

  @Prop({ default: null })
  deletedAt: Date;
}

const SessionActivitySchema = SchemaFactory.createForClass(SessionActivity);

SessionActivitySchema.index({ sessionId: 1, userId: 1 });

SessionActivitySchema.index({ sessionId: 1 });

SessionActivitySchema.index({ userId: 1 });

SessionActivitySchema.virtual('session', {
  ref: 'Session',
  localField: 'sessionId',
  foreignField: '_id',
});

SessionActivitySchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

export { SessionActivitySchema };

export const SessionActivityModel = {
  name: 'SessionActivity',
  schema: SessionActivitySchema,
};

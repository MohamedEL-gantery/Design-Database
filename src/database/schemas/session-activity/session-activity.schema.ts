import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from "mongoose";
import { Session } from "../session";
import { User } from "../user";

@Schema({ timestamps: true })
export class SessionActivity extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId,ref: 'Session' , required: true, index: true })
	sessionId: Session;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true })
	userId: User;

  @Prop({type:Date, default:null})
  lastLoginAt:Date
  
  @Prop({type:Date, default:null})
  lastLogoutAt:Date

	@Prop({ default: null })
	deletedAt: Date;
}


export const SessionActivitySchema = SchemaFactory.createForClass(SessionActivity);
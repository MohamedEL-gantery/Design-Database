import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from "mongoose";
import { User} from "../user";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },})
export class Session extends Document{
  @Prop({type:mongoose.Schema.Types.ObjectId, ref:'User', index:true,required:true,})
  userId:User

  @Prop({type:String,index:true ,required:true,})
  refreshTokenHash:string

  @Prop({type:String,index:true  ,required:true,})
  accessTokenHash:string

  @Prop({type:Date, default:Date.now,})
  createdAt:Date
}

export const SessionSchema=SchemaFactory.createForClass(Document);
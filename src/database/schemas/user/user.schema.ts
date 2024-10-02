import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import { RoleType } from "../../../shared/contracts/enums";


@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User extends Document {

@Prop({type:String, minlength:3 ,required:true,})
  firstName:string

@Prop({type:String, minlength:3 ,required:true,})
  lastName:string

@Prop({type:String, unique:true ,required:true,}) 
email:string 

@Prop({type:String, unique:true ,required:true,})
phoneNumber:string

@Prop({type:String, minlength:8, required:true,})
hashedPassword:string

@Prop({type:RoleType, enum:RoleType, default:RoleType.User,})
role:RoleType

@Prop({type:String, default:null})
googleId:string

@Prop({type:String, default:null})
facebookId:string

@Prop({type:String, default:null})
appalId:string

@Prop({type:String, default:null})
hashedVerificationCode:string

@Prop({type:Boolean, default:false})
isVerifiedVerificationCode:boolean

@Prop({type:Boolean, default:true})
isActive: boolean

@Prop({type:Date, default:null})
lastPasswordReset:Date

@Prop({type:Date, default:null})
lastVerificationCodeVerifiedAt:Date

}

export const UserSchema=SchemaFactory.createForClass(User);
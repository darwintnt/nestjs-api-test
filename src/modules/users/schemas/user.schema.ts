import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
    default: true,
  })
  is_active: boolean;

  @Prop({
    required: true,
    default: Date.now(),
  })
  created_at: Date;

  @Prop({
    required: true,
    default: Date.now(),
  })
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

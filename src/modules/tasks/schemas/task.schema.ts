import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    required: true,
    default: false,
  })
  done: boolean;

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

export const TaskSchema = SchemaFactory.createForClass(Task);

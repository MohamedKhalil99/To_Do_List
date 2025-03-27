import { Document } from 'mongoose';

export interface notes extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: string;
  readonly date: Date;
}
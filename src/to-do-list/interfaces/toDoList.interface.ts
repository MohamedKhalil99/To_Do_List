import { Document } from 'mongoose';
import { ToDoStatus } from '../dto/createToDoList.dto';

export interface Note extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: ToDoStatus;
  readonly date?: Date;
}
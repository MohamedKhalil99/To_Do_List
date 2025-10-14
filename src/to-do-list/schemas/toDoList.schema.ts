import mongoose from 'mongoose';
import { ToDoStatus } from '../dto/createToDoList.dto';

export const NotesSchema = new mongoose.Schema (
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: Object.values(ToDoStatus),
      default: ToDoStatus.PENDING,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
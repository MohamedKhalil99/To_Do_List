import * as mongoose from 'mongoose';

export const NotesSchema = new mongoose.Schema
({
    title: String,
    description: String,
    status: String,
    date: Date,
});
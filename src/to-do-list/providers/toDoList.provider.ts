import { Connection } from 'mongoose';
import { NotesSchema } from '../schemas/toDoList.schema';

export const notesProviders = 
[
  {
    provide: 'NOTES_MODEL',
    useFactory: (connection: Connection) => connection.model('notes', NotesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

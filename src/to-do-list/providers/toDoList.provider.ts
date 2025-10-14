import { Connection } from 'mongoose';
import { NotesSchema } from '../schemas/toDoList.schema';

export const notesProviders = 
[
  {
    provide: 'NOTES_MODEL',
    useFactory: (connection: Connection) => connection.model('Note', NotesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
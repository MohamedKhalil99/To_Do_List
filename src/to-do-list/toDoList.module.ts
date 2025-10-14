import { Module } from '@nestjs/common';
import { ToDoListService } from './toDoList.service';
import { ToDoListController } from './toDoList.controller';
import { DatabaseModule } from 'src/database/database.module';
import { notesProviders } from './providers/toDoList.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [ToDoListController],
  providers: [...notesProviders, ToDoListService],
})
export class ToDoListModule {}
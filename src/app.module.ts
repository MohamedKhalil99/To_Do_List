import { Module } from '@nestjs/common';
import { ToDoListModule } from './to-do-list/toDoList.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ToDoListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
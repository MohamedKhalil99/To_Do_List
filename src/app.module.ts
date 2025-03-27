import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoListModule } from './to-do-list/toDoList.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),ToDoListModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

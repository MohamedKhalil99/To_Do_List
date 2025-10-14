import { Controller,Post, Body, Get, Param, ValidationPipe, Patch, Delete, } from '@nestjs/common';
import { ToDoListService } from './toDoList.service';
import { CreateToDoListDto } from './dto/createToDoList.dto';
import { UpdateToDoListDto } from './dto/updateToDoList.dto';

@Controller('notes')
export class ToDoListController 
{
  constructor(private readonly service: ToDoListService) {}

  //DESC can Any User Add Note To Do List
  //ROUTE Post /notes
  //ACCESS Public
  @Post()
  create(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})) createDto: CreateToDoListDto) {
    return this.service.create(createDto);
  }

  //DESC can Any User Get Notes
  //ROUTE Get /notes
  //ACCESS Public
  @Get()
  findAll() {
    return this.service.findAll();
  }

  //DESC can Any User Get Note by ID
  //ROUTE Get /notes/ID
  //ACCESS Public
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  //DESC can Any User Update Notes By ID
  //ROUTE Patch /notes/ID
  //ACCESS Public
  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})) updateDto: UpdateToDoListDto) {
    return this.service.update(id, updateDto);
  }

  //DESC can Any User Delete Note By ID
  //ROUTE Delete /notes/ID
  //ACCESS Public
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
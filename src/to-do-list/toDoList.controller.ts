import { Controller,Post, Body, Get, Param, ValidationPipe, Patch, Delete, } from '@nestjs/common';
import { ToDoListService } from './toDoList.service';
import { CreateToDoListDto } from './dto/createToDoList.dto';
import { UpdateToDoListDto } from './dto/updateToDoList.dto';

@Controller('note')
export class ToDoListController 
{
  constructor(private readonly toDoListService: ToDoListService) {}

  //DESC can Any User Add Note To Do List
  //ROUTE Post /note
  //ACCESS Public
  @Post()
  create(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) 
  body: CreateToDoListDto) 
  {
    return this.toDoListService.create(body);
  }

  //DESC can Any User Get Notes
  //ROUTE Get /note
  //ACCESS Public
  @Get()
  findAll() 
  {
    return this.toDoListService.findAll();
  }

  //DESC can Any User Get Note by ID
  //ROUTE Get /note/ID
  //ACCESS Public
  @Get(':id')
  findOne(@Param('id') id: string) 
  {
    return this.toDoListService.findOne(id);
  }

  //DESC can Any User Update Notes By ID
  //ROUTE Patch /note/ID
  //ACCESS Public
  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
   body: UpdateToDoListDto) 
  {
    return this.toDoListService.update(id, body);
  }

  //DESC can Any User Delete Note By ID
  //ROUTE Delete /note/ID
  //ACCESS Public
  @Delete(':id')
  remove(@Param('id') id: string) 
  {
    return this.toDoListService.remove(id);
  }
}
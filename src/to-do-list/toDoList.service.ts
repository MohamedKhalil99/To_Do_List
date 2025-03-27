import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoListDto } from './dto/createToDoList.dto';
import { notes } from './interfaces/toDoList.interface';
import { Model } from 'mongoose';
import { UpdateToDoListDto } from './dto/updateToDoList.dto';

@Injectable()
export class ToDoListService 
{
  constructor(@Inject('NOTES_MODEL')private notesModel: Model<notes>,){}
  
  async create(body: CreateToDoListDto) 
  {
    const note = await this.notesModel.create(body);
    return note;
  }
  
  async findAll():Promise<notes[]>
  {
    const notes= await this.notesModel.find().select('-_id');
    if(!notes){throw new NotFoundException();}
    return notes;
  }
  
  async findOne(id:string):Promise<notes> 
  {
    const note= await this.notesModel.findById(id);
    if(!note){throw new NotFoundException();}
    return note;
  }


  async update(id: string, body: UpdateToDoListDto) 
  {
    const note =await this.notesModel.findByIdAndUpdate(id,body,{new:true}).select('-_id');
    if(!note){throw new NotFoundException();}
    return note;
  }

  async remove(id:string):Promise<string>
  {
    const note=await this.notesModel.findByIdAndDelete(id);
    if(!note){throw new NotFoundException();} 
    return 'Note Deleted';
  }
}

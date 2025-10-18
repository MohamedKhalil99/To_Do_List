import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoListDto } from './dto/createToDoList.dto';
import { Note } from './interfaces/toDoList.interface';
import { Model } from 'mongoose';
import { UpdateToDoListDto } from './dto/updateToDoList.dto';

@Injectable()
export class ToDoListService 
{
  constructor(@Inject('NOTES_MODEL') private notesModel: Model<Note>) {}
  
  async create(createDto: CreateToDoListDto) {
    // check if title already exists
    const existingNote = await this.notesModel.findOne({ title: createDto.title });
    if (existingNote) {
      return { message: '⚠️ A note with this title already exists', success: false };
    }
    const note = await this.notesModel.create(createDto);
    return { success: true, data: note };
  }
  
  async findAll(): Promise<Note[]> {
    const notes = await this.notesModel.find();
    return notes;
  }
  
  async findOne(id: string): Promise<Note> {
    const note = await this.notesModel.findById(id);
    if(!note){throw new NotFoundException('Note not found');}
    return note;
  }

  async update(id: string, updateDto: UpdateToDoListDto) {
    const note = await this.notesModel.findByIdAndUpdate(id, updateDto, {new:true});
    if(!note){throw new NotFoundException('Note not found');} 
    return { message: 'Note updated successfully', note };
  }

  async remove(id: string): Promise<{ message: string }> {
    const note = await this.notesModel.findByIdAndDelete(id);
    if(!note){throw new NotFoundException('Note not found');} 
    return { message: 'Note deleted successfully' };
  }
}
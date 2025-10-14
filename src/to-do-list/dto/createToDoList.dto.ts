import { Type } from "class-transformer";
import { IsDate, IsEnum, IsOptional, IsString, MaxLength } from "class-validator";

export enum ToDoStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'inprogress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export class CreateToDoListDto 
{
    @IsString({message:'Title Must Be String'})
    @MaxLength(20, {message:'Title Max Length Is 20 characters'})
    title: string;

    @IsString({message:'description Must Be String'})
    description: string;

    @IsEnum(ToDoStatus, {message:'status must be one from these [ pending, inprogress, completed, cancelled ]'})
    status: ToDoStatus;

    @Type(()=>Date)
    @IsDate()
    @IsOptional()
    date?: Date;
}
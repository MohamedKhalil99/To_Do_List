import { PartialType } from '@nestjs/mapped-types';
import { CreateToDoListDto } from './createToDoList.dto';

export class UpdateToDoListDto extends PartialType(CreateToDoListDto) {}

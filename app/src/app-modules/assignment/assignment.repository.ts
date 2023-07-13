import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from 'src/entities/assignment.entity';
import { Repository } from 'typeorm';
import { AssignmentDto } from './assignment.types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AssignmentRepository {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
  ) {}

  async getAll(): Promise<Assignment[]> {
    return await this.assignmentRepository.find();
  }

  async get(id: string): Promise<Assignment> {
    return await this.assignmentRepository.findOneBy({
      id,
    });
  }

  async upsert(data: AssignmentDto): Promise<Assignment> {
    return await this.assignmentRepository.save({
      ...data,
      id: data.id ? data.id : uuidv4(),
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleteSuccess = await this.assignmentRepository.delete(id);
    return deleteSuccess.affected > 0 ? true : false;
  }
}

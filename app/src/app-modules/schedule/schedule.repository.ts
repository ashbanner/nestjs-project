import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleDto } from './schedule.types';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Schedule } from 'src/entities/schedule.entity';

@Injectable()
export class ScheduleRepository {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async getAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async get(id: string): Promise<Schedule> {
    return await this.scheduleRepository.findOneBy({
      id,
    });
  }

  async upsert(data: ScheduleDto): Promise<Schedule> {
    return await this.scheduleRepository.save({
      ...data,
      id: data.id ? data.id : uuidv4(),
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleteSuccess = await this.scheduleRepository.delete(id);
    return deleteSuccess.affected > 0 ? true : false;
  }
}

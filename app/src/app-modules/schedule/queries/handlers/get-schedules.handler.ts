import { QueryHandler } from '@nestjs/cqrs';
import { GetSchedulesQuery } from '../impl/get-schedules.query';
import { ScheduleRepository } from '../../schedule.repository';
import { Schedule } from 'src/entities/schedule.entity';

@QueryHandler(GetSchedulesQuery)
export class GetScheduleHandler {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}
  async execute(query: GetSchedulesQuery): Promise<Schedule[]> {
    return await this.scheduleRepository.getAll();
  }
}

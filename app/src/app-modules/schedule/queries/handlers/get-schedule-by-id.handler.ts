import { QueryHandler } from '@nestjs/cqrs';
import { ScheduleRepository } from '../../schedule.repository';
import { GetScheduleByIdQuery } from '../impl/get-schedule-by-id.query';
import { Schedule } from 'src/entities/schedule.entity';

@QueryHandler(GetScheduleByIdQuery)
export class GetScheduleByIdHandler {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}
  async execute(query: GetScheduleByIdQuery): Promise<Schedule> {
    return await this.scheduleRepository.get(query.id);
  }
}

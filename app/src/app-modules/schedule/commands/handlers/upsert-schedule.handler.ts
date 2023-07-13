import { CommandHandler } from '@nestjs/cqrs';
import { ScheduleRepository } from '../../schedule.repository';
import { UpsertScheduleCommand } from '../impl/upsert-schedule.command';
import { Schedule } from 'src/entities/schedule.entity';

@CommandHandler(UpsertScheduleCommand)
export class UpsertScheduleHandler {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}
  async execute(query: UpsertScheduleCommand): Promise<Schedule> {
    return await this.scheduleRepository.upsert(query.data);
  }
}

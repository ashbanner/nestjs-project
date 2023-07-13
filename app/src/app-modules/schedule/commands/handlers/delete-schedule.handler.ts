import { CommandHandler } from '@nestjs/cqrs';
import { ScheduleRepository } from '../../schedule.repository';
import { DeleteScheduleCommand } from '../impl/delete-schedule.command';

@CommandHandler(DeleteScheduleCommand)
export class DeleteScheduleHandler {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}
  async execute(command: DeleteScheduleCommand): Promise<boolean> {
    return await this.scheduleRepository.delete(command.id);
  }
}

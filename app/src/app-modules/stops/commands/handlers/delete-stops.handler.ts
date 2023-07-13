import { CommandHandler } from '@nestjs/cqrs';
import { DeleteStopsCommand } from '../impl/delete-stops.command';
import { StopsRepository } from '../../stops.repository';

@CommandHandler(DeleteStopsCommand)
export class DeleteStopsHandler {
  constructor(private readonly stopsRepository: StopsRepository) {}
  async execute(command: DeleteStopsCommand): Promise<boolean> {
    return await this.stopsRepository.delete(command.id);
  }
}

import { CommandHandler } from '@nestjs/cqrs';
import { TruckRepository } from '../../truck.repository';
import { DeleteTruckCommand } from '../impl/delete-truck.command';

@CommandHandler(DeleteTruckCommand)
export class DeleteTruckHandler {
  constructor(private readonly truckRepository: TruckRepository) {}
  async execute(command: DeleteTruckCommand): Promise<boolean> {
    return await this.truckRepository.delete(command.id);
  }
}

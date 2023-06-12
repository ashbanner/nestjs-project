import { CommandHandler } from '@nestjs/cqrs';
import { DeleteTruckDriverCommand } from '../impl/delete-truck-driver.command';
import { TruckDriverRepository } from '../../truck-driver.repository';

@CommandHandler(DeleteTruckDriverCommand)
export class DeleteTruckDriverHandler {
  constructor(private readonly truckDriverRepository: TruckDriverRepository) {}
  async execute(command: DeleteTruckDriverCommand): Promise<boolean> {
    return await this.truckDriverRepository.delete(command.id);
  }
}

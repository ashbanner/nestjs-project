import { CommandHandler } from '@nestjs/cqrs';
import { TruckDriverRepository } from '../../truck-driver.repository';
import { TruckDriver } from 'src/entities/truck-driver.entity';
import { UpsertTruckDriverCommand } from '../impl/upsert-truck-driver.command';

@CommandHandler(UpsertTruckDriverCommand)
export class UpsertTruckDriverHandler {
  constructor(private readonly truckDriverRepository: TruckDriverRepository) {}
  async execute(query: UpsertTruckDriverCommand): Promise<TruckDriver> {
    return await this.truckDriverRepository.upsert(query.data);
  }
}

import { CommandHandler } from '@nestjs/cqrs';
import { UpsertTruckCommand } from '../impl/upsert-truck.command';
import { TruckRepository } from '../../truck.repository';
import { Truck } from 'src/entities/truck.entity';

@CommandHandler(UpsertTruckCommand)
export class UpsertTruckHandler {
  constructor(private readonly truckRepository: TruckRepository) {}
  async execute(query: UpsertTruckCommand): Promise<Truck> {
    return await this.truckRepository.upsert(query.data);
  }
}

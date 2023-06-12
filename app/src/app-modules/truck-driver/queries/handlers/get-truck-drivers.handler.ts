import { QueryHandler } from '@nestjs/cqrs';
import { GetTruckDriversQuery } from '../impl/get-truck-drivers.query';
import { TruckDriverRepository } from '../../truck-driver.repository';
import { TruckDriver } from 'src/entities/truck-driver.entity';

@QueryHandler(GetTruckDriversQuery)
export class GetTruckDriversHandler {
  constructor(private readonly truckDriverRepository: TruckDriverRepository) {}
  async execute(query: GetTruckDriversQuery): Promise<TruckDriver[]> {
    return await this.truckDriverRepository.getAll();
  }
}

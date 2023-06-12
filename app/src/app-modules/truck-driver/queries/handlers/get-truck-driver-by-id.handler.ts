import { QueryHandler } from '@nestjs/cqrs';
import { GetTruckDriverByIdQuery } from '../impl/get-truck-driver-by-id.query';
import { TruckDriverRepository } from '../../truck-driver.repository';
import { TruckDriver } from 'src/entities/truck-driver.entity';

@QueryHandler(GetTruckDriverByIdQuery)
export class GetTruckDriverByIdHandler {
  constructor(private readonly truckDriverRepository: TruckDriverRepository) {}
  async execute(query: GetTruckDriverByIdQuery): Promise<TruckDriver> {
    return await this.truckDriverRepository.get(query.id);
  }
}

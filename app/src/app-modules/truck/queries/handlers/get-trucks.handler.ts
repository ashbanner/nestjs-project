import { QueryHandler } from '@nestjs/cqrs';
import { GetTrucksQuery } from '../impl/get-trucks.query';
import { TruckRepository } from '../../truck.repository';
import { Truck } from 'src/entities/truck.entity';

@QueryHandler(GetTrucksQuery)
export class GetTruckHandler {
  constructor(private readonly truckRepository: TruckRepository) {}
  async execute(query: GetTrucksQuery): Promise<Truck[]> {
    return await this.truckRepository.getAll();
  }
}

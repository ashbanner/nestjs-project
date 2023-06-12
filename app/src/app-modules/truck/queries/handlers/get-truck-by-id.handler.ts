import { QueryHandler } from '@nestjs/cqrs';
import { GetTruckByIdQuery } from '../impl/get-truck-by-id.query';
import { TruckRepository } from '../../truck.repository';
import { Truck } from 'src/entities/truck.entity';

@QueryHandler(GetTruckByIdQuery)
export class GetTruckByIdHandler {
  constructor(private readonly truckRepository: TruckRepository) {}
  async execute(query: GetTruckByIdQuery): Promise<Truck> {
    return await this.truckRepository.get(query.id);
  }
}

import { QueryHandler } from '@nestjs/cqrs';
import { GetStopsQuery } from '../impl/get-stops.query';
import { StopsRepository } from '../../stops.repository';
import { Stop } from 'src/entities/stops.entity';

@QueryHandler(GetStopsQuery)
export class GetStopsHandler {
  constructor(private readonly stopRepository: StopsRepository) {}
  async execute(query: GetStopsQuery): Promise<Stop[]> {
    return await this.stopRepository.getAll();
  }
}

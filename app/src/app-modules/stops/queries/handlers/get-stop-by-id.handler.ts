import { QueryHandler } from '@nestjs/cqrs';
import { GetStopByIdQuery } from '../impl/get-stop-by-id.query';
import { StopsRepository } from '../../stops.repository';
import { Stop } from 'src/entities/stops.entity';

@QueryHandler(GetStopByIdQuery)
export class GetStopByIdHandler {
  constructor(private readonly stopRepository: StopsRepository) {}
  async execute(query: GetStopByIdQuery): Promise<Stop> {
    return await this.stopRepository.get(query.id);
  }
}

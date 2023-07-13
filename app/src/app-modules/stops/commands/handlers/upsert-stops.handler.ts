import { CommandHandler } from '@nestjs/cqrs';
import { UpsertStopsCommand } from '../impl/upsert-stops.command';
import { StopsRepository } from '../../stops.repository';
import { Stop } from 'src/entities/stops.entity';

@CommandHandler(UpsertStopsCommand)
export class UpsertStopsHandler {
  constructor(private readonly stopsRepository: StopsRepository) {}
  async execute(query: UpsertStopsCommand): Promise<Stop> {
    return await this.stopsRepository.upsert(query.data);
  }
}

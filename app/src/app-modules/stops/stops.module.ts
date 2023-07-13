import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stop } from 'src/entities/stops.entity';
import { StopController } from './stops.controller';
import { StopsRepository } from './stops.repository';
import { GetStopByIdHandler } from './queries/handlers/get-stop-by-id.handler';
import { GetStopsHandler } from './queries/handlers/get-stops.handler';
import { UpsertStopsHandler } from './commands/handlers/upsert-stops.handler';
import { DeleteStopsHandler } from './commands/handlers/delete-stops.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Stop])],
  controllers: [StopController],
  providers: [
    StopsRepository,
    GetStopByIdHandler,
    GetStopsHandler,
    UpsertStopsHandler,
    DeleteStopsHandler,
    StopController,
  ],
})
export class StopModule {}

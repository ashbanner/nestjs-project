import { Module } from '@nestjs/common';
import { TruckRepository } from './truck.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Truck } from 'src/entities/truck.entity';
import { DeleteTruckHandler } from './commands/handlers/delete-truck.handler';
import { UpsertTruckHandler } from './commands/handlers/upsert-truck.handler';
import { GetTruckByIdHandler } from './queries/handlers/get-truck-by-id.handler';
import { GetTruckHandler } from './queries/handlers/get-trucks.handler';
import { TruckController } from './truck.controller';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Truck])],
  controllers: [TruckController],
  providers: [
    TruckRepository,
    DeleteTruckHandler,
    UpsertTruckHandler,
    GetTruckByIdHandler,
    GetTruckHandler,
  ],
})
export class TruckModule {}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetTruckDriverByIdHandler } from './queries/handlers/get-truck-driver-by-id.handler';
import { GetTruckDriversHandler } from './queries/handlers/get-truck-drivers.handler';
import { TruckDriverController } from './truck-driver.controller';
import { TruckDriverRepository } from './truck-driver.repository';
import { TruckDriver } from 'src/entities/truck-driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteTruckDriverHandler } from './commands/handlers/delete-truck-driver.handler';
import { UpsertTruckDriverHandler } from './commands/handlers/upsert-truck-driver.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([TruckDriver])],
  controllers: [TruckDriverController],
  providers: [
    GetTruckDriverByIdHandler,
    GetTruckDriversHandler,
    TruckDriverRepository,
    DeleteTruckDriverHandler,
    UpsertTruckDriverHandler,
  ],
})
export class TruckDriverModule {}

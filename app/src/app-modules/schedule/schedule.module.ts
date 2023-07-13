import { Module } from '@nestjs/common';
import { DeleteScheduleHandler } from './commands/handlers/delete-schedule.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpsertScheduleHandler } from './commands/handlers/upsert-schedule.handler';
import { Schedule } from 'src/entities/schedule.entity';
import { ScheduleController } from './schedule.controller';
import { GetScheduleHandler } from './queries/handlers/get-schedules.handler';
import { GetScheduleByIdHandler } from './queries/handlers/get-schedule-by-id.handler';
import { ScheduleRepository } from './schedule.repository';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Schedule])],
  controllers: [ScheduleController],
  providers: [
    DeleteScheduleHandler,
    UpsertScheduleHandler,
    GetScheduleHandler,
    GetScheduleByIdHandler,
    ScheduleRepository,
  ],
})
export class ScheduleModule {}

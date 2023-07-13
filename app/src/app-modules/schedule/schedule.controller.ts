import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ScheduleDto } from './schedule.types';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetSchedulesQuery } from './queries/impl/get-schedules.query';
import { GetScheduleByIdQuery } from './queries/impl/get-schedule-by-id.query';
import { UpsertScheduleCommand } from './commands/impl/upsert-schedule.command';
import { DeleteScheduleCommand } from './commands/impl/delete-schedule.command';

@Controller('/api/schedule')
export class ScheduleController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getSchedule() {
    const getSchedulesQuery = new GetSchedulesQuery();
    return await this.queryBus.execute(getSchedulesQuery);
  }

  @Get('/:id')
  async getScheduleById(@Param('id') id: string) {
    const getScheduleByIdQuery = new GetScheduleByIdQuery();
    getScheduleByIdQuery.id = id;
    return await this.queryBus.execute(getScheduleByIdQuery);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createSchedule(@Body() schedule: ScheduleDto) {
    const upsertScheduleCommand = new UpsertScheduleCommand();
    upsertScheduleCommand.data = schedule;
    return await this.commandBus.execute(upsertScheduleCommand);
  }

  @Put('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSchedule(@Body() schedule: ScheduleDto) {
    const upsertScheduleCommand = new UpsertScheduleCommand();
    upsertScheduleCommand.data = schedule;
    return await this.commandBus.execute(upsertScheduleCommand);
  }

  @Delete('/:id')
  async deleteScheduleDriver(@Param('id') id: string) {
    const deletescheduleCommand = new DeleteScheduleCommand();
    deletescheduleCommand.id = id;
    return await this.commandBus.execute(deletescheduleCommand);
  }
}

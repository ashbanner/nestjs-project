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
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetStopsQuery } from './queries/impl/get-stops.query';
import { GetStopByIdQuery } from './queries/impl/get-stop-by-id.query';
import { StopsDto } from './stops.types';
import { UpsertStopsCommand } from './commands/impl/upsert-stops.command';
import { DeleteStopsCommand } from './commands/impl/delete-stops.command';

@Controller('/api/stop')
export class StopController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getStops() {
    const getStopsQuery = new GetStopsQuery();
    return await this.queryBus.execute(getStopsQuery);
  }

  @Get('/:id')
  async getStopById(@Param('id') id: string) {
    const getStopByIdQuery = new GetStopByIdQuery();
    getStopByIdQuery.id = id;
    return await this.queryBus.execute(getStopByIdQuery);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStops(@Body() stops: StopsDto) {
    const upsertStopsCommand = new UpsertStopsCommand();
    upsertStopsCommand.data = stops;
    return await this.commandBus.execute(upsertStopsCommand);
  }

  @Put('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateStops(@Body() stops: StopsDto) {
    const upsertStopsCommand = new UpsertStopsCommand();
    upsertStopsCommand.data = stops;
    return await this.commandBus.execute(upsertStopsCommand);
  }

  @Delete('/:id')
  async deleteStops(@Param('id') id: string) {
    const deleteStopsCommand = new DeleteStopsCommand();
    deleteStopsCommand.id = id;
    return await this.commandBus.execute(deleteStopsCommand);
  }
}

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
import { TruckDto } from './truck.types';
import { GetTrucksQuery } from './queries/impl/get-trucks.query';
import { GetTruckByIdQuery } from './queries/impl/get-truck-by-id.query';
import { UpsertTruckCommand } from './commands/impl/upsert-truck.command';
import { DeleteTruckCommand } from './commands/impl/delete-truck.command';

@Controller('/api/truck')
export class TruckController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getTrucks() {
    const getTrucksQuery = new GetTrucksQuery();
    return await this.queryBus.execute(getTrucksQuery);
  }

  @Get('/:id')
  async getTruckById(@Param('id') id: string) {
    const getTruckByIdQuery = new GetTruckByIdQuery();
    getTruckByIdQuery.id = id;
    return await this.queryBus.execute(getTruckByIdQuery);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createTruck(@Body() truck: TruckDto) {
    const upsertTruckCommand = new UpsertTruckCommand();
    upsertTruckCommand.data = truck;
    return await this.commandBus.execute(upsertTruckCommand);
  }

  @Put('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateTruck(@Body() truck: TruckDto) {
    const upsertTruckCommand = new UpsertTruckCommand();
    upsertTruckCommand.data = truck;
    return await this.commandBus.execute(upsertTruckCommand);
  }

  @Delete('/:id')
  async deleteTruck(@Param('id') id: string) {
    const deleteTruckCommand = new DeleteTruckCommand();
    deleteTruckCommand.id = id;
    return await this.commandBus.execute(deleteTruckCommand);
  }
}

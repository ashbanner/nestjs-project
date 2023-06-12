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
import { GetTruckDriverByIdQuery } from './queries/impl/get-truck-driver-by-id.query';
import { GetTruckDriversQuery } from './queries/impl/get-truck-drivers.query';
import { TruckDriverDto } from './truck-driver.types';
import { UpsertTruckDriverCommand } from './commands/impl/upsert-truck-driver.command';
import { DeleteTruckDriverCommand } from './commands/impl/delete-truck-driver.command';

@Controller('/api/truck-driver')
export class TruckDriverController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getTruckDrivers() {
    const getTruckDriversQuery = new GetTruckDriversQuery();
    return await this.queryBus.execute(getTruckDriversQuery);
  }

  @Get('/:id')
  async getTruckDriverById(@Param('id') id: string) {
    const getTruckDriverByIdQuery = new GetTruckDriverByIdQuery();
    getTruckDriverByIdQuery.id = id;
    return await this.queryBus.execute(getTruckDriverByIdQuery);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createTruckDriver(@Body() truckDriver: TruckDriverDto) {
    const upsertTruckDriverCommand = new UpsertTruckDriverCommand();
    upsertTruckDriverCommand.data = truckDriver;
    return await this.commandBus.execute(upsertTruckDriverCommand);
  }

  @Put('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateTruckDriver(@Body() truckDriver: TruckDriverDto) {
    const upsertTruckDriverCommand = new UpsertTruckDriverCommand();
    upsertTruckDriverCommand.data = truckDriver;
    return await this.commandBus.execute(upsertTruckDriverCommand);
  }

  @Delete('/:id')
  async deleteTruckDriver(@Param('id') id: string) {
    const deleteTruckDriverCommand = new DeleteTruckDriverCommand();
    deleteTruckDriverCommand.id = id;
    return await this.commandBus.execute(deleteTruckDriverCommand);
  }
}

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
import { GetAssignmentsQuery } from './queries/impl/get-assignments.queries';
import { GetAssignmentByIdQuery } from './queries/impl/get-assignment-by-id.queries';
import { AssignmentDto } from './assignment.types';
import { UpsertAssignmentsCommand } from './commands/impl/upsert-assignment.command';
import { DeleteAssignmentsCommand } from './commands/impl/delete-assignment.command';

@Controller('/api/assignment')
export class AssignmentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('/')
  async getAssignments() {
    const getAssignmentsQuery = new GetAssignmentsQuery();
    return await this.queryBus.execute(getAssignmentsQuery);
  }

  @Get('/:id')
  async getAssignmentById(@Param('id') id: string) {
    const getAssignmentByIdQuery = new GetAssignmentByIdQuery();
    getAssignmentByIdQuery.id = id;
    return await this.queryBus.execute(getAssignmentByIdQuery);
  }

  @Post('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createAssignment(@Body() assignment: AssignmentDto) {
    const upsertAssignmentsCommand = new UpsertAssignmentsCommand();
    upsertAssignmentsCommand.data = assignment;
    return await this.commandBus.execute(upsertAssignmentsCommand);
  }

  @Put('/')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateAssignment(@Body() assignment: AssignmentDto) {
    const upsertAssignmentsCommand = new UpsertAssignmentsCommand();
    upsertAssignmentsCommand.data = assignment;
    return await this.commandBus.execute(upsertAssignmentsCommand);
  }

  @Delete('/:id')
  async deleteAssignment(@Param('id') id: string) {
    const deleteAssignmentsCommand = new DeleteAssignmentsCommand();
    deleteAssignmentsCommand.id = id;
    return await this.commandBus.execute(deleteAssignmentsCommand);
  }
}

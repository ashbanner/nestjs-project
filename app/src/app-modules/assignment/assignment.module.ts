import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from 'src/entities/assignment.entity';
import { GetAssignmentsQuery } from './queries/impl/get-assignments.queries';
import { UpsertAssignmentsHandler } from './commands/handlers/upsert-assignment.handler';
import { UpsertAssignmentsCommand } from './commands/impl/upsert-assignment.command';
import { DeleteAssignmentsCommand } from './commands/impl/delete-assignment.command';
import { GetAssignmentByIdHandler } from './queries/handlers/get-assignment-by-id.handler';
import { GetAssignmentsHandler } from './queries/handlers/get-assignments.handler';
import { GetAssignmentByIdQuery } from './queries/impl/get-assignment-by-id.queries';
import { AssignmentController } from './assignment.controller';
import { DeleteAssignmentHandler } from './commands/handlers/delete-assignment.handler';
import { AssignmentRepository } from './assignment.repository';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Assignment])],
  controllers: [AssignmentController],
  providers: [
    DeleteAssignmentHandler,
    UpsertAssignmentsHandler,
    GetAssignmentByIdHandler,
    GetAssignmentsHandler,
    AssignmentRepository,
  ],
})
export class AssignmentModule {}

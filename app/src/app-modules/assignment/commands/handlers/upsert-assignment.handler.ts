import { CommandHandler } from '@nestjs/cqrs';
import { UpsertAssignmentsCommand } from '../impl/upsert-assignment.command';
import { AssignmentRepository } from '../../assignment.repository';
import { Assignment } from 'src/entities/assignment.entity';

@CommandHandler(UpsertAssignmentsCommand)
export class UpsertAssignmentsHandler {
  constructor(private readonly assignmentRepository: AssignmentRepository) {}
  async execute(query: UpsertAssignmentsCommand): Promise<Assignment> {
    return await this.assignmentRepository.upsert(query.data);
  }
}

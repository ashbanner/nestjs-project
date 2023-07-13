import { QueryHandler } from '@nestjs/cqrs';
import { GetAssignmentsQuery } from '../impl/get-assignments.queries';
import { AssignmentRepository } from '../../assignment.repository';
import { Assignment } from 'src/entities/assignment.entity';

@QueryHandler(GetAssignmentsQuery)
export class GetAssignmentsHandler {
  constructor(private readonly assignmentRepository: AssignmentRepository) {}
  async execute(query: GetAssignmentsQuery): Promise<Assignment[]> {
    return await this.assignmentRepository.getAll();
  }
}

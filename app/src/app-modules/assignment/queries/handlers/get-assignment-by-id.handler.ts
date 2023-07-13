import { QueryHandler } from '@nestjs/cqrs';
import { GetAssignmentByIdQuery } from '../impl/get-assignment-by-id.queries';
import { AssignmentRepository } from '../../assignment.repository';
import { Assignment } from 'src/entities/assignment.entity';

@QueryHandler(GetAssignmentByIdQuery)
export class GetAssignmentByIdHandler {
  constructor(private readonly assignmentRepository: AssignmentRepository) {}
  async execute(query: GetAssignmentByIdQuery): Promise<Assignment> {
    return await this.assignmentRepository.get(query.id);
  }
}

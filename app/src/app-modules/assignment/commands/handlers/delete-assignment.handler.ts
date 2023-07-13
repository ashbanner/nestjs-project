import { CommandHandler } from '@nestjs/cqrs';
import { AssignmentRepository } from '../../assignment.repository';
import { DeleteAssignmentsCommand } from '../impl/delete-assignment.command';

@CommandHandler(DeleteAssignmentsCommand)
export class DeleteAssignmentHandler {
  constructor(private readonly assignmentRepository: AssignmentRepository) {}
  async execute(command: DeleteAssignmentsCommand): Promise<boolean> {
    return await this.assignmentRepository.delete(command.id);
  }
}

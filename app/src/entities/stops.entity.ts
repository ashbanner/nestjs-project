import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'stop' })
export class Stop {
  @PrimaryColumn({ name: 'id' })
  id: string;
  @Column({ name: 'assignmentId' })
  assignmentId: string;
  @Column({ name: 'address' })
  address: string;
}

import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'schedule' })
export class Schedule {
  @PrimaryColumn({ name: 'id' })
  id: string;
}

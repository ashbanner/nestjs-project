import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'assignment' })
export class Assignment {
  @PrimaryColumn({ name: 'id' })
  id: string;
  @Column({ name: 'scheduleId' })
  scheduleId: string;
  @Column({ name: 'truckDriverId' })
  truckDriverId: string;
}

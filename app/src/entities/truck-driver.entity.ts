import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'truck_driver' })
export class TruckDriver {
  @PrimaryColumn({ name: 'id' })
  id: string;
  @Column({ name: 'name' })
  name: string;
}

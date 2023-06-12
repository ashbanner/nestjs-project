import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'truck' })
export class Truck {
  @PrimaryColumn({ name: 'id' })
  id: string;
  @Column({ name: 'isElectric' })
  isElectric: boolean;
  @Column({ name: 'isCompanyOwned' })
  isCompanyOwned: boolean;
}

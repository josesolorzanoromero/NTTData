import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ nullable: false })
  status: number;
}

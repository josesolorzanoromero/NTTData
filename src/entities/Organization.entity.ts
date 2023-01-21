import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tribe } from './Tribe.entity';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ nullable: false })
  status: number;
  @OneToMany(() => Tribe, (tribe) => tribe.id_organization)
  tribes: Tribe[];
}

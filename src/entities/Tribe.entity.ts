import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Organization } from './Organization.entity';
import { Repositories } from './Repositories.entity';

@Entity({ name: 'tribe' })
export class Tribe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ nullable: false })
  status: number;
  @ManyToOne(() => Organization, (organization) => organization.tribes)
  id_organization: Organization;
  @OneToMany(() => Repositories, (repository) => repository.id_tribe)
  repositories: Repositories[];
}

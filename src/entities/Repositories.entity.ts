import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Metrics } from './Metrics.entity';
import { Tribe } from './Tribe.entity';

@Entity({ name: 'repositories' })
export class Repositories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ length: 1, nullable: false }) //E=Enable, D=Disable, A=Archived
  state: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
  @Column({ length: 1, nullable: false }) //A=Active, I=Inactive
  status: string;
  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  id_tribe: Tribe;
  @OneToOne(() => Metrics)
  @JoinColumn()
  metrics: Metrics;
}

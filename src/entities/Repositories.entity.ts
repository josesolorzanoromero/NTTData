import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tribe } from './Tribe.entity';

@Entity({ name: 'repositories' })
export class Repositories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ length: 1, nullable: false })
  state: string;
  @Column({ type: 'timestamp' })
  create_time: Date;
  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  id_tribe: Tribe;
}

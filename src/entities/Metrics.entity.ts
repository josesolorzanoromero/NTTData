import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'metrics' })
export class Metrics {
  @PrimaryColumn()
  id_repository: number;
  @Column({ type: 'double', nullable: false })
  coverage: number;
  @Column({ nullable: false })
  bugs: number;
  @Column({ nullable: false })
  vulnerabilities: number;
  @Column({ nullable: false })
  hotspot: number;
  @Column({ nullable: false })
  code_smells: number;
}

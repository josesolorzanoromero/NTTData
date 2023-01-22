import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  LessThan,
  MoreThan,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { Tribe } from 'src/entities/Tribe.entity';
import { MockService } from 'src/mock/mock.service';

@Injectable()
export class TribesService {
  constructor(
    @InjectRepository(Tribe) private tribeRepo: Repository<Tribe>,
    private mockService: MockService,
  ) {}

  async getMetrics(id: number) {
    const existTribe = await this.tribeRepo.findOne({ where: { id } });
    if (!existTribe) {
      throw new HttpException('La Tribu no se encuentra registrada', 404);
    }

    const tribe = await this.tribeRepo.findOne({
      where: {
        id,
        repositories: {
          state: 'E',
          create_time: Between(new Date('2023-1-1'), new Date('2023-12-31')),
          metrics: {
            coverage: MoreThan(75),
          },
        },
      },
      relations: { repositories: { metrics: true }, id_organization: true },
    });

    if (!tribe) {
      throw new HttpException(
        'La Tribu no tiene repositorios que cumplan con la cobertura necesaria',
        404,
      );
    }

    const dataRepositories = tribe.repositories.map((item) => {
      const dataExtarnalRepository = this.mockService.getOne(item.id);
      return {
        // ...item,
        id: item.id,
        name: item.name,
        tribe: tribe.name,
        organization: tribe.id_organization.name,
        coverage: `${item.metrics.coverage}%`,
        code_smells: item.metrics.code_smells,
        bugs: item.metrics.bugs,
        vulnerabilities: item.metrics.vulnerabilities,
        hotspot: item.metrics.hotspot,
        verificationState:
          dataExtarnalRepository.state == 604
            ? 'Verificado'
            : dataExtarnalRepository.state == 605
            ? 'En espera'
            : 'Aprobado',
        state: item.status == 'A' ? 'Habilitado' : 'Archivado',
      };
    });
    return { repositories: dataRepositories };
  }
}

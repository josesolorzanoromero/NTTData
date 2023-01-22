import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
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
          metrics: {
            coverage: MoreThan(75),
          },
        },
      },
      relations: { repositories: true },
    });

    if (!tribe) {
      throw new HttpException(
        'La Tribu no tiene repositorios que cumplan con la cobertura necesaria',
        404,
      );
    }

    const dataRepositories = tribe.repositories.map((item) => {
      const dataExtarnalRepository = this.mockService.getOne(item.id);
      console.log('dataExtarnalRepository');
      console.log(dataExtarnalRepository);
      return {
        ...item,
        state:
          dataExtarnalRepository.state == 604
            ? 'Verificado'
            : dataExtarnalRepository.state == 605
            ? 'En espera'
            : 'Aprobado',
      };
    });

    const dataMapped = {
      id: tribe.id,
      name: tribe.name,
      status: tribe.status,
      repositories: dataRepositories,
    };

    // return dataExtarnalRepository;
    return dataMapped;
  }
}

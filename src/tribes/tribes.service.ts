import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { Tribe } from 'src/entities/Tribe.entity';

@Injectable()
export class TribesService {
  constructor(@InjectRepository(Tribe) private tribeRepo: Repository<Tribe>) {}

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

    return tribe;
  }
}

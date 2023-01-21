import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'src/entities/Organization.entity';
import { OrganizationInterface } from './interfaces/Organization.interface';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepo: Repository<Organization>,
  ) {}

  async getAll() {
    const organizations = await this.organizationRepo.find();
    return organizations;
  }

  async getOne(id: number) {
    const organization = await this.organizationRepo.findOne({ where: { id } });
    return organization;
  }

  create(organizationData) {
    const newData = this.organizationRepo.create({
      ...organizationData,
    });
    return this.organizationRepo.save(newData);
  }

  async update(id: number, data: any) {
    const dataUpdate = await this.organizationRepo.update({ id }, { ...data });
    return dataUpdate;
  }

  async delete(id: number) {
    return this.organizationRepo.delete({ id });
  }
}

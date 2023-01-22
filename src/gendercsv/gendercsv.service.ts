import { Injectable } from '@nestjs/common';
import { TribesService } from 'src/tribes/tribes.service';

@Injectable()
export class GendercsvService {
  constructor(private tribeService: TribesService) {}

  async getCSV(id: number) {
    const data = await this.tribeService.getMetrics(id);
    const { convertArrayToCSV } = require('convert-array-to-csv');
    const header = [
      'id',
      'name',
      'tribe',
      'organization',
      'coverage',
      'codeSmells',
      'bugs',
      'vulnerabilities',
      'hotspots',
      'verificationState',
      'state',
    ];
    const csvFromArrayOfObjects = convertArrayToCSV(data.repositories, {
      header,
      separator: ';',
    });
    return csvFromArrayOfObjects;
  }
}

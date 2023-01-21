import { Injectable } from '@nestjs/common';
import { dataMock } from './dataMock';

@Injectable()
export class MockService {
  findAllData() {
    return dataMock;
  }
}

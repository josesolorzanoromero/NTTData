import { Injectable } from '@nestjs/common';
import { dataMock } from './dataMock';

@Injectable()
export class MockService {
  getAll() {
    return dataMock;
  }

  getOne(id: number) {
    const allDataExternal = this.getAll();
    const data = allDataExternal.find((item) => item.id == id);
    return data;
  }
}

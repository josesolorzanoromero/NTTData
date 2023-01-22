import { Test, TestingModule } from '@nestjs/testing';
import { GendercsvController } from './gendercsv.controller';

describe('GendercsvController', () => {
  let controller: GendercsvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GendercsvController],
    }).compile();

    controller = module.get<GendercsvController>(GendercsvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

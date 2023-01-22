import { Test, TestingModule } from '@nestjs/testing';
import { GendercsvService } from './gendercsv.service';

describe('GendercsvService', () => {
  let service: GendercsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GendercsvService],
    }).compile();

    service = module.get<GendercsvService>(GendercsvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

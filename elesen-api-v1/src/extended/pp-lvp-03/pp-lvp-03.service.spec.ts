import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp03Service } from './pp-lvp-03.service';

describe('PpLvp03Service', () => {
  let service: PpLvp03Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp03Service],
    }).compile();

    service = module.get<PpLvp03Service>(PpLvp03Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

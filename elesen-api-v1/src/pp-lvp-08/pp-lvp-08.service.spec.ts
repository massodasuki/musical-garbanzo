import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp08Service } from './pp-lvp-08.service';

describe('PpLvp08Service', () => {
  let service: PpLvp08Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp08Service],
    }).compile();

    service = module.get<PpLvp08Service>(PpLvp08Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

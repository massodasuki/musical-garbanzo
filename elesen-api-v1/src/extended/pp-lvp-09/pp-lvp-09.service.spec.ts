import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp09Service } from './pp-lvp-09.service';

describe('PpLvp09Service', () => {
  let service: PpLvp09Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp09Service],
    }).compile();

    service = module.get<PpLvp09Service>(PpLvp09Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPm02Service } from './pp-pm-02.service';

describe('PpPm02Service', () => {
  let service: PpPm02Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPm02Service],
    }).compile();

    service = module.get<PpPm02Service>(PpPm02Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

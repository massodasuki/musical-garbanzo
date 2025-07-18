import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp07Service } from './pp-lvp-07.service';

describe('PpLvp07Service', () => {
  let service: PpLvp07Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp07Service],
    }).compile();

    service = module.get<PpLvp07Service>(PpLvp07Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

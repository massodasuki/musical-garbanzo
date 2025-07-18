import { Test, TestingModule } from '@nestjs/testing';
import { PpPm03Service } from './pp-pm-03.service';

describe('PpPm03Service', () => {
  let service: PpPm03Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPm03Service],
    }).compile();

    service = module.get<PpPm03Service>(PpPm03Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

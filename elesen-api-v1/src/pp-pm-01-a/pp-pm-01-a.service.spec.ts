import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01AService } from './pp-pm-01-a.service';

describe('PpPm01AService', () => {
  let service: PpPm01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPm01AService],
    }).compile();

    service = module.get<PpPm01AService>(PpPm01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

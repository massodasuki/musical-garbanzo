import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01BService } from './pp-pm-01-b.service';

describe('PpPm01BService', () => {
  let service: PpPm01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPm01BService],
    }).compile();

    service = module.get<PpPm01BService>(PpPm01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

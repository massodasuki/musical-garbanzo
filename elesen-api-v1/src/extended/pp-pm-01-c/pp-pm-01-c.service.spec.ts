import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01CService } from './pp-pm-01-c.service';

describe('PpPm01CService', () => {
  let service: PpPm01CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPm01CService],
    }).compile();

    service = module.get<PpPm01CService>(PpPm01CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

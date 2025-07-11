import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp03AService } from './pp-pvp-03-a.service';

describe('PpPvp03AService', () => {
  let service: PpPvp03AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp03AService],
    }).compile();

    service = module.get<PpPvp03AService>(PpPvp03AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

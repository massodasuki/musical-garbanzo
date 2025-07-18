import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02CService } from './pp-pvp-02-c.service';

describe('PpPvp02CService', () => {
  let service: PpPvp02CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp02CService],
    }).compile();

    service = module.get<PpPvp02CService>(PpPvp02CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

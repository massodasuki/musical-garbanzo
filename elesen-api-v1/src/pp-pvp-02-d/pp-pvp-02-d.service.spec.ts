import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02DService } from './pp-pvp-02-d.service';

describe('PpPvp02DService', () => {
  let service: PpPvp02DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp02DService],
    }).compile();

    service = module.get<PpPvp02DService>(PpPvp02DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

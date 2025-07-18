import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02AService } from './pp-pvp-02-a.service';

describe('PpPvp02AService', () => {
  let service: PpPvp02AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp02AService],
    }).compile();

    service = module.get<PpPvp02AService>(PpPvp02AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

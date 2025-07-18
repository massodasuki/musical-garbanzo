import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02BService } from './pp-pvp-02-b.service';

describe('PpPvp02BService', () => {
  let service: PpPvp02BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp02BService],
    }).compile();

    service = module.get<PpPvp02BService>(PpPvp02BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

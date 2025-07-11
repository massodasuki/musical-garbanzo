import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp03BService } from './pp-pvp-03-b.service';

describe('PpPvp03BService', () => {
  let service: PpPvp03BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPvp03BService],
    }).compile();

    service = module.get<PpPvp03BService>(PpPvp03BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

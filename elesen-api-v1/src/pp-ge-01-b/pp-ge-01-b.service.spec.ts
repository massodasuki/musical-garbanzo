import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01BService } from './pp-ge-01-b.service';

describe('PpGe01BService', () => {
  let service: PpGe01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGe01BService],
    }).compile();

    service = module.get<PpGe01BService>(PpGe01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

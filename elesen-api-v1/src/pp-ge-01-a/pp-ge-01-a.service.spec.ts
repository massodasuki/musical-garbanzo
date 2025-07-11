import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01AService } from './pp-ge-01-a.service';

describe('PpGe01AService', () => {
  let service: PpGe01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGe01AService],
    }).compile();

    service = module.get<PpGe01AService>(PpGe01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

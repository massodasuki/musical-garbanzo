import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01CService } from './pp-ge-01-c.service';

describe('PpGe01CService', () => {
  let service: PpGe01CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGe01CService],
    }).compile();

    service = module.get<PpGe01CService>(PpGe01CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

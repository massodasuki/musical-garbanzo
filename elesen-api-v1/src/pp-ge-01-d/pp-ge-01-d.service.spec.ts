import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01DService } from './pp-ge-01-d.service';

describe('PpGe01DService', () => {
  let service: PpGe01DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGe01DService],
    }).compile();

    service = module.get<PpGe01DService>(PpGe01DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

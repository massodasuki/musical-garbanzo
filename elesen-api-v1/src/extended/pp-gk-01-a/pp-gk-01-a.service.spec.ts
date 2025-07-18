import { Test, TestingModule } from '@nestjs/testing';
import { PpGk01AService } from './pp-gk-01-a.service';

describe('PpGk01AService', () => {
  let service: PpGk01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGk01AService],
    }).compile();

    service = module.get<PpGk01AService>(PpGk01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

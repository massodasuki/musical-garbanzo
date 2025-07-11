import { Test, TestingModule } from '@nestjs/testing';
import { PpTz01AService } from './pp-tz-01-a.service';

describe('PpTz01AService', () => {
  let service: PpTz01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpTz01AService],
    }).compile();

    service = module.get<PpTz01AService>(PpTz01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

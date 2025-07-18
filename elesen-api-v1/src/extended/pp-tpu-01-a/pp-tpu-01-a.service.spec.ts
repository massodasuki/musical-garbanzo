import { Test, TestingModule } from '@nestjs/testing';
import { PpTpu01AService } from './pp-tpu-01-a.service';

describe('PpTpu01AService', () => {
  let service: PpTpu01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpTpu01AService],
    }).compile();

    service = module.get<PpTpu01AService>(PpTpu01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

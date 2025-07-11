import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01AService } from './pp-uv-01-a.service';

describe('PpUv01AService', () => {
  let service: PpUv01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpUv01AService],
    }).compile();

    service = module.get<PpUv01AService>(PpUv01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

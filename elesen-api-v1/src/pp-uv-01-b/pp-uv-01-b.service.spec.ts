import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01BService } from './pp-uv-01-b.service';

describe('PpUv01BService', () => {
  let service: PpUv01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpUv01BService],
    }).compile();

    service = module.get<PpUv01BService>(PpUv01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

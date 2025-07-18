import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01CService } from './pp-uv-01-c.service';

describe('PpUv01CService', () => {
  let service: PpUv01CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpUv01CService],
    }).compile();

    service = module.get<PpUv01CService>(PpUv01CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

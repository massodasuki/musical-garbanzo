import { Test, TestingModule } from '@nestjs/testing';
import { PpTpu01BService } from './pp-tpu-01-b.service';

describe('PpTpu01BService', () => {
  let service: PpTpu01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpTpu01BService],
    }).compile();

    service = module.get<PpTpu01BService>(PpTpu01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

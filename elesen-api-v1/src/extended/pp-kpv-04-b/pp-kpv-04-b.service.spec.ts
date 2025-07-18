import { Test, TestingModule } from '@nestjs/testing';
import { PpKpv04BService } from './pp-kpv-04-b.service';

describe('PpKpv04BService', () => {
  let service: PpKpv04BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpKpv04BService],
    }).compile();

    service = module.get<PpKpv04BService>(PpKpv04BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

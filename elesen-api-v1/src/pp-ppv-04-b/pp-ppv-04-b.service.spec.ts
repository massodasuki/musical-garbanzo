import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv04BService } from './pp-ppv-04-b.service';

describe('PpPpv04BService', () => {
  let service: PpPpv04BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv04BService],
    }).compile();

    service = module.get<PpPpv04BService>(PpPpv04BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

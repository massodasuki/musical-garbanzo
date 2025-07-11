import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01BService } from './pp-ppv-01-b.service';

describe('PpPpv01BService', () => {
  let service: PpPpv01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv01BService],
    }).compile();

    service = module.get<PpPpv01BService>(PpPpv01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

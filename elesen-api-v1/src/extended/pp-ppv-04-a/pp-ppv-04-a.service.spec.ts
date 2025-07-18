import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv04AService } from './pp-ppv-04-a.service';

describe('PpPpv04AService', () => {
  let service: PpPpv04AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv04AService],
    }).compile();

    service = module.get<PpPpv04AService>(PpPpv04AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

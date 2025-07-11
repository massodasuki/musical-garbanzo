import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01AService } from './pp-ppv-01-a.service';

describe('PpPpv01AService', () => {
  let service: PpPpv01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv01AService],
    }).compile();

    service = module.get<PpPpv01AService>(PpPpv01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

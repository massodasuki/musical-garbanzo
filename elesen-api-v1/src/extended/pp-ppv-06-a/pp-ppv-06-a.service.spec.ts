import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv06AService } from './pp-ppv-06-a.service';

describe('PpPpv06AService', () => {
  let service: PpPpv06AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv06AService],
    }).compile();

    service = module.get<PpPpv06AService>(PpPpv06AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

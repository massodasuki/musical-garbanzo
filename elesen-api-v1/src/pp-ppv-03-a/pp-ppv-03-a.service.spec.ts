import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv03AService } from './pp-ppv-03-a.service';

describe('PpPpv03AService', () => {
  let service: PpPpv03AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv03AService],
    }).compile();

    service = module.get<PpPpv03AService>(PpPpv03AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv08AService } from './pp-ppv-08-a.service';

describe('PpPpv08AService', () => {
  let service: PpPpv08AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv08AService],
    }).compile();

    service = module.get<PpPpv08AService>(PpPpv08AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

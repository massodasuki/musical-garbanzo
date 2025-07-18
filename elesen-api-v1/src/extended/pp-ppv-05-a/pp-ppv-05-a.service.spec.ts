import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv05AService } from './pp-ppv-05-a.service';

describe('PpPpv05AService', () => {
  let service: PpPpv05AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv05AService],
    }).compile();

    service = module.get<PpPpv05AService>(PpPpv05AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

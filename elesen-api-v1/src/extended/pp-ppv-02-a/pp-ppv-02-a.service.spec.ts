import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02AService } from './pp-ppv-02-a.service';

describe('PpPpv02AService', () => {
  let service: PpPpv02AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv02AService],
    }).compile();

    service = module.get<PpPpv02AService>(PpPpv02AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

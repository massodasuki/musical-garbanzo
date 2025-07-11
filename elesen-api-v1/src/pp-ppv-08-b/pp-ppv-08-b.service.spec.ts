import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv08BService } from './pp-ppv-08-b.service';

describe('PpPpv08BService', () => {
  let service: PpPpv08BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv08BService],
    }).compile();

    service = module.get<PpPpv08BService>(PpPpv08BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

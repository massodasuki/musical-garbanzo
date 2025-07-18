import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv06BService } from './pp-ppv-06-b.service';

describe('PpPpv06BService', () => {
  let service: PpPpv06BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv06BService],
    }).compile();

    service = module.get<PpPpv06BService>(PpPpv06BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

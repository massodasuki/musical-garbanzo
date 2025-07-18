import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02BService } from './pp-ppv-02-b.service';

describe('PpPpv02BService', () => {
  let service: PpPpv02BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv02BService],
    }).compile();

    service = module.get<PpPpv02BService>(PpPpv02BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv05BService } from './pp-ppv-05-b.service';

describe('PpPpv05BService', () => {
  let service: PpPpv05BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv05BService],
    }).compile();

    service = module.get<PpPpv05BService>(PpPpv05BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01CService } from './pp-ppv-01-c.service';

describe('PpPpv01CService', () => {
  let service: PpPpv01CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv01CService],
    }).compile();

    service = module.get<PpPpv01CService>(PpPpv01CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

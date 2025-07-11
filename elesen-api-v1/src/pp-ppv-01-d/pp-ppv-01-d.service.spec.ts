import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01DService } from './pp-ppv-01-d.service';

describe('PpPpv01DService', () => {
  let service: PpPpv01DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv01DService],
    }).compile();

    service = module.get<PpPpv01DService>(PpPpv01DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

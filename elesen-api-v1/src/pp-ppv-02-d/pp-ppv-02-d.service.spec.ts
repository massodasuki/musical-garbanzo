import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02DService } from './pp-ppv-02-d.service';

describe('PpPpv02DService', () => {
  let service: PpPpv02DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv02DService],
    }).compile();

    service = module.get<PpPpv02DService>(PpPpv02DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

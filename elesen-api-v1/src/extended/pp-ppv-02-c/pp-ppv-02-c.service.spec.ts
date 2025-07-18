import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02CService } from './pp-ppv-02-c.service';

describe('PpPpv02CService', () => {
  let service: PpPpv02CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv02CService],
    }).compile();

    service = module.get<PpPpv02CService>(PpPpv02CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

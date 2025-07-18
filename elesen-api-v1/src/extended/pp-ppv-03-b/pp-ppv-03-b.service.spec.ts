import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv03BService } from './pp-ppv-03-b.service';

describe('PpPpv03BService', () => {
  let service: PpPpv03BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv03BService],
    }).compile();

    service = module.get<PpPpv03BService>(PpPpv03BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

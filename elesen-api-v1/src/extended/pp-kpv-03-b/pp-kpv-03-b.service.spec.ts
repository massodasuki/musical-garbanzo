import { Test, TestingModule } from '@nestjs/testing';
import { PpKpv03BService } from './pp-kpv-03-b.service';

describe('PpKpv03BService', () => {
  let service: PpKpv03BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpKpv03BService],
    }).compile();

    service = module.get<PpKpv03BService>(PpKpv03BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

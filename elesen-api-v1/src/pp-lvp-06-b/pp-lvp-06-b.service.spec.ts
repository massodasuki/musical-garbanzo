import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp06BService } from './pp-lvp-06-b.service';

describe('PpLvp06BService', () => {
  let service: PpLvp06BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp06BService],
    }).compile();

    service = module.get<PpLvp06BService>(PpLvp06BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

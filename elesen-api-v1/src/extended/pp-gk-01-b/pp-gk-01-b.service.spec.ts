import { Test, TestingModule } from '@nestjs/testing';
import { PpGk01BService } from './pp-gk-01-b.service';

describe('PpGk01BService', () => {
  let service: PpGk01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpGk01BService],
    }).compile();

    service = module.get<PpGk01BService>(PpGk01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

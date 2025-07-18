import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01BService } from './pp-pk-01-b.service';

describe('PpPk01BService', () => {
  let service: PpPk01BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPk01BService],
    }).compile();

    service = module.get<PpPk01BService>(PpPk01BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

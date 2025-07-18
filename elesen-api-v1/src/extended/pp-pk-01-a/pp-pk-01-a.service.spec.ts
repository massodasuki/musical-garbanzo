import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01AService } from './pp-pk-01-a.service';

describe('PpPk01AService', () => {
  let service: PpPk01AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPk01AService],
    }).compile();

    service = module.get<PpPk01AService>(PpPk01AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01CService } from './pp-pk-01-c.service';

describe('PpPk01CService', () => {
  let service: PpPk01CService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPk01CService],
    }).compile();

    service = module.get<PpPk01CService>(PpPk01CService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

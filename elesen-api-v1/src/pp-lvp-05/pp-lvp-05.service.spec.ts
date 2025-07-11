import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp05Service } from './pp-lvp-05.service';

describe('PpLvp05Service', () => {
  let service: PpLvp05Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp05Service],
    }).compile();

    service = module.get<PpLvp05Service>(PpLvp05Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

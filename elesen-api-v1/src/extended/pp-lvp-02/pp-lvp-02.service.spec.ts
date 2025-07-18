import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp02Service } from './pp-lvp-02.service';

describe('PpLvp02Service', () => {
  let service: PpLvp02Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpLvp02Service],
    }).compile();

    service = module.get<PpLvp02Service>(PpLvp02Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

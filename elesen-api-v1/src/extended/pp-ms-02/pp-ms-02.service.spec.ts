import { Test, TestingModule } from '@nestjs/testing';
import { PpMs02Service } from './pp-ms-02.service';

describe('PpMs02Service', () => {
  let service: PpMs02Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpMs02Service],
    }).compile();

    service = module.get<PpMs02Service>(PpMs02Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

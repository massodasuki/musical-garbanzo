import { Test, TestingModule } from '@nestjs/testing';
import { PpTz01Service } from './pp-tz-01.service';

describe('PpTz01AService', () => {
  let service: PpTz01Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpTz01Service],
    }).compile();

    service = module.get<PpTz01Service>(PpTz01Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

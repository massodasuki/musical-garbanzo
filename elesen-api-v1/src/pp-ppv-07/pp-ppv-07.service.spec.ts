import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv07Service } from './pp-ppv-07.service';

describe('PpPpv07Service', () => {
  let service: PpPpv07Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpPpv07Service],
    }).compile();

    service = module.get<PpPpv07Service>(PpPpv07Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

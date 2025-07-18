import { Test, TestingModule } from '@nestjs/testing';
import { NdPp04Service } from './nd-pp-04.service';

describe('NdPp04Service', () => {
  let service: NdPp04Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp04Service],
    }).compile();

    service = module.get<NdPp04Service>(NdPp04Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

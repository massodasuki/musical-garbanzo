import { Test, TestingModule } from '@nestjs/testing';
import { NdPp08Service } from './nd-pp-08.service';

describe('NdPp08Service', () => {
  let service: NdPp08Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp08Service],
    }).compile();

    service = module.get<NdPp08Service>(NdPp08Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

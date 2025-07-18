import { Test, TestingModule } from '@nestjs/testing';
import { NdPp09Service } from './nd-pp-09.service';

describe('NdPp09Service', () => {
  let service: NdPp09Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp09Service],
    }).compile();

    service = module.get<NdPp09Service>(NdPp09Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

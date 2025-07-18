import { Test, TestingModule } from '@nestjs/testing';
import { NdPp07Service } from './nd-pp-07.service';

describe('NdPp07Service', () => {
  let service: NdPp07Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp07Service],
    }).compile();

    service = module.get<NdPp07Service>(NdPp07Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

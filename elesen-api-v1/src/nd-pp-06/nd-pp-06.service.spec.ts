import { Test, TestingModule } from '@nestjs/testing';
import { NdPp06Service } from './nd-pp-06.service';

describe('NdPp06Service', () => {
  let service: NdPp06Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp06Service],
    }).compile();

    service = module.get<NdPp06Service>(NdPp06Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NdPp03Service } from './nd-pp-03.service';

describe('NdPp03Service', () => {
  let service: NdPp03Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp03Service],
    }).compile();

    service = module.get<NdPp03Service>(NdPp03Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

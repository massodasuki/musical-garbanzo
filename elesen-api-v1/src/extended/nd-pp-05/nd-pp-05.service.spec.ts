import { Test, TestingModule } from '@nestjs/testing';
import { NdPp05Service } from './nd-pp-05.service';

describe('NdPp05Service', () => {
  let service: NdPp05Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp05Service],
    }).compile();

    service = module.get<NdPp05Service>(NdPp05Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

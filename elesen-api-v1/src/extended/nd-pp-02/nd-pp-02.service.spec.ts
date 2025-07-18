import { Test, TestingModule } from '@nestjs/testing';
import { NdPp02Service } from './nd-pp-02.service';

describe('NdPp02Service', () => {
  let service: NdPp02Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdPp02Service],
    }).compile();

    service = module.get<NdPp02Service>(NdPp02Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

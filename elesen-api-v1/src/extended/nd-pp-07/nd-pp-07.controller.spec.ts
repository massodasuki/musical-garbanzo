import { Test, TestingModule } from '@nestjs/testing';
import { NdPp07Controller } from './nd-pp-07.controller';
import { NdPp07Service } from './nd-pp-07.service';

describe('NdPp07Controller', () => {
  let controller: NdPp07Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp07Controller],
      providers: [NdPp07Service],
    }).compile();

    controller = module.get<NdPp07Controller>(NdPp07Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

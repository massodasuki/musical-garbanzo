import { Test, TestingModule } from '@nestjs/testing';
import { NdPp02Controller } from './nd-pp-02.controller';
import { NdPp02Service } from './nd-pp-02.service';

describe('NdPp02Controller', () => {
  let controller: NdPp02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp02Controller],
      providers: [NdPp02Service],
    }).compile();

    controller = module.get<NdPp02Controller>(NdPp02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

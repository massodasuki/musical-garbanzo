import { Test, TestingModule } from '@nestjs/testing';
import { NdPp04Controller } from './nd-pp-04.controller';
import { NdPp04Service } from './nd-pp-04.service';

describe('NdPp04Controller', () => {
  let controller: NdPp04Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp04Controller],
      providers: [NdPp04Service],
    }).compile();

    controller = module.get<NdPp04Controller>(NdPp04Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

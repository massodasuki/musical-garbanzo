import { Test, TestingModule } from '@nestjs/testing';
import { NdPp05Controller } from './nd-pp-05.controller';
import { NdPp05Service } from './nd-pp-05.service';

describe('NdPp05Controller', () => {
  let controller: NdPp05Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp05Controller],
      providers: [NdPp05Service],
    }).compile();

    controller = module.get<NdPp05Controller>(NdPp05Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

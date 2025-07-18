import { Test, TestingModule } from '@nestjs/testing';
import { NdPp09Controller } from './nd-pp-09.controller';
import { NdPp09Service } from './nd-pp-09.service';

describe('NdPp09Controller', () => {
  let controller: NdPp09Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp09Controller],
      providers: [NdPp09Service],
    }).compile();

    controller = module.get<NdPp09Controller>(NdPp09Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

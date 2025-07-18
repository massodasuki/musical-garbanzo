import { Test, TestingModule } from '@nestjs/testing';
import { NdPp03Controller } from './nd-pp-03.controller';
import { NdPp03Service } from './nd-pp-03.service';

describe('NdPp03Controller', () => {
  let controller: NdPp03Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp03Controller],
      providers: [NdPp03Service],
    }).compile();

    controller = module.get<NdPp03Controller>(NdPp03Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

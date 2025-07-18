import { Test, TestingModule } from '@nestjs/testing';
import { NdPp06Controller } from './nd-pp-06.controller';
import { NdPp06Service } from './nd-pp-06.service';

describe('NdPp06Controller', () => {
  let controller: NdPp06Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp06Controller],
      providers: [NdPp06Service],
    }).compile();

    controller = module.get<NdPp06Controller>(NdPp06Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

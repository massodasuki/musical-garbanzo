import { Test, TestingModule } from '@nestjs/testing';
import { NdPp08Controller } from './nd-pp-08.controller';
import { NdPp08Service } from './nd-pp-08.service';

describe('NdPp08Controller', () => {
  let controller: NdPp08Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NdPp08Controller],
      providers: [NdPp08Service],
    }).compile();

    controller = module.get<NdPp08Controller>(NdPp08Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

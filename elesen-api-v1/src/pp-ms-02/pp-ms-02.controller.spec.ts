import { Test, TestingModule } from '@nestjs/testing';
import { PpMs02Controller } from './pp-ms-02.controller';
import { PpMs02Service } from './pp-ms-02.service';

describe('PpMs02Controller', () => {
  let controller: PpMs02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpMs02Controller],
      providers: [PpMs02Service],
    }).compile();

    controller = module.get<PpMs02Controller>(PpMs02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

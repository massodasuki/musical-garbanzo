import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp02Controller } from './pp-lvp-02.controller';
import { PpLvp02Service } from './pp-lvp-02.service';

describe('PpLvp02Controller', () => {
  let controller: PpLvp02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp02Controller],
      providers: [PpLvp02Service],
    }).compile();

    controller = module.get<PpLvp02Controller>(PpLvp02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

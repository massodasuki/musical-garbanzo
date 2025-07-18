import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp05Controller } from './pp-lvp-05.controller';
import { PpLvp05Service } from './pp-lvp-05.service';

describe('PpLvp05Controller', () => {
  let controller: PpLvp05Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp05Controller],
      providers: [PpLvp05Service],
    }).compile();

    controller = module.get<PpLvp05Controller>(PpLvp05Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

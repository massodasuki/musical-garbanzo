import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp03Controller } from './pp-lvp-03.controller';
import { PpLvp03Service } from './pp-lvp-03.service';

describe('PpLvp03Controller', () => {
  let controller: PpLvp03Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp03Controller],
      providers: [PpLvp03Service],
    }).compile();

    controller = module.get<PpLvp03Controller>(PpLvp03Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp09Controller } from './pp-lvp-09.controller';
import { PpLvp09Service } from './pp-lvp-09.service';

describe('PpLvp09Controller', () => {
  let controller: PpLvp09Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp09Controller],
      providers: [PpLvp09Service],
    }).compile();

    controller = module.get<PpLvp09Controller>(PpLvp09Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

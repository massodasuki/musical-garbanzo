import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp08Controller } from './pp-lvp-08.controller';
import { PpLvp08Service } from './pp-lvp-08.service';

describe('PpLvp08Controller', () => {
  let controller: PpLvp08Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp08Controller],
      providers: [PpLvp08Service],
    }).compile();

    controller = module.get<PpLvp08Controller>(PpLvp08Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

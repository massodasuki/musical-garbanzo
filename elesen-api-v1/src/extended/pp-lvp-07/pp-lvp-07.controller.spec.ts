import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp07Controller } from './pp-lvp-07.controller';
import { PpLvp07Service } from './pp-lvp-07.service';

describe('PpLvp07Controller', () => {
  let controller: PpLvp07Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp07Controller],
      providers: [PpLvp07Service],
    }).compile();

    controller = module.get<PpLvp07Controller>(PpLvp07Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

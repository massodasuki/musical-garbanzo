import { Test, TestingModule } from '@nestjs/testing';
import { PpPm03Controller } from './pp-pm-03.controller';
import { PpPm03Service } from './pp-pm-03.service';

describe('PpPm03Controller', () => {
  let controller: PpPm03Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPm03Controller],
      providers: [PpPm03Service],
    }).compile();

    controller = module.get<PpPm03Controller>(PpPm03Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

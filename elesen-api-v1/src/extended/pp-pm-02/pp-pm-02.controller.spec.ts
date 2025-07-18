import { Test, TestingModule } from '@nestjs/testing';
import { PpPm02Controller } from './pp-pm-02.controller';
import { PpPm02Service } from './pp-pm-02.service';

describe('PpPm02Controller', () => {
  let controller: PpPm02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPm02Controller],
      providers: [PpPm02Service],
    }).compile();

    controller = module.get<PpPm02Controller>(PpPm02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

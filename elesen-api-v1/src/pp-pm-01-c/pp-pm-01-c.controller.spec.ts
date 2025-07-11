import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01CController } from './pp-pm-01-c.controller';
import { PpPm01CService } from './pp-pm-01-c.service';

describe('PpPm01CController', () => {
  let controller: PpPm01CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPm01CController],
      providers: [PpPm01CService],
    }).compile();

    controller = module.get<PpPm01CController>(PpPm01CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

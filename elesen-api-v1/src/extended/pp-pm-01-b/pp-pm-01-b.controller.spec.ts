import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01BController } from './pp-pm-01-b.controller';
import { PpPm01BService } from './pp-pm-01-b.service';

describe('PpPm01BController', () => {
  let controller: PpPm01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPm01BController],
      providers: [PpPm01BService],
    }).compile();

    controller = module.get<PpPm01BController>(PpPm01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

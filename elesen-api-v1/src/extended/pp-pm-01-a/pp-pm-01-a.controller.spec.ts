import { Test, TestingModule } from '@nestjs/testing';
import { PpPm01AController } from './pp-pm-01-a.controller';
import { PpPm01AService } from './pp-pm-01-a.service';

describe('PpPm01AController', () => {
  let controller: PpPm01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPm01AController],
      providers: [PpPm01AService],
    }).compile();

    controller = module.get<PpPm01AController>(PpPm01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

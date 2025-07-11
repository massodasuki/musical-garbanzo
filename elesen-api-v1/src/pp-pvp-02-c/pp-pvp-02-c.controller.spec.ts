import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02CController } from './pp-pvp-02-c.controller';
import { PpPvp02CService } from './pp-pvp-02-c.service';

describe('PpPvp02CController', () => {
  let controller: PpPvp02CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp02CController],
      providers: [PpPvp02CService],
    }).compile();

    controller = module.get<PpPvp02CController>(PpPvp02CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

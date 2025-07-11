import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02DController } from './pp-pvp-02-d.controller';
import { PpPvp02DService } from './pp-pvp-02-d.service';

describe('PpPvp02DController', () => {
  let controller: PpPvp02DController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp02DController],
      providers: [PpPvp02DService],
    }).compile();

    controller = module.get<PpPvp02DController>(PpPvp02DController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

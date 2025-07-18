import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02AController } from './pp-pvp-02-a.controller';
import { PpPvp02AService } from './pp-pvp-02-a.service';

describe('PpPvp02AController', () => {
  let controller: PpPvp02AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp02AController],
      providers: [PpPvp02AService],
    }).compile();

    controller = module.get<PpPvp02AController>(PpPvp02AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp03AController } from './pp-pvp-03-a.controller';
import { PpPvp03AService } from './pp-pvp-03-a.service';

describe('PpPvp03AController', () => {
  let controller: PpPvp03AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp03AController],
      providers: [PpPvp03AService],
    }).compile();

    controller = module.get<PpPvp03AController>(PpPvp03AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp02BController } from './pp-pvp-02-b.controller';
import { PpPvp02BService } from './pp-pvp-02-b.service';

describe('PpPvp02BController', () => {
  let controller: PpPvp02BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp02BController],
      providers: [PpPvp02BService],
    }).compile();

    controller = module.get<PpPvp02BController>(PpPvp02BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPvp03BController } from './pp-pvp-03-b.controller';
import { PpPvp03BService } from './pp-pvp-03-b.service';

describe('PpPvp03BController', () => {
  let controller: PpPvp03BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPvp03BController],
      providers: [PpPvp03BService],
    }).compile();

    controller = module.get<PpPvp03BController>(PpPvp03BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

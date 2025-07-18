import { Test, TestingModule } from '@nestjs/testing';
import { PpLvp06BController } from './pp-lvp-06-b.controller';
import { PpLvp06BService } from './pp-lvp-06-b.service';

describe('PpLvp06BController', () => {
  let controller: PpLvp06BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpLvp06BController],
      providers: [PpLvp06BService],
    }).compile();

    controller = module.get<PpLvp06BController>(PpLvp06BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

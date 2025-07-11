import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01BController } from './pp-ge-01-b.controller';
import { PpGe01BService } from './pp-ge-01-b.service';

describe('PpGe01BController', () => {
  let controller: PpGe01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGe01BController],
      providers: [PpGe01BService],
    }).compile();

    controller = module.get<PpGe01BController>(PpGe01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

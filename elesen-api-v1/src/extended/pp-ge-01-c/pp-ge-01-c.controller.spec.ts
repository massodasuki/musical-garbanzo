import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01CController } from './pp-ge-01-c.controller';
import { PpGe01CService } from './pp-ge-01-c.service';

describe('PpGe01CController', () => {
  let controller: PpGe01CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGe01CController],
      providers: [PpGe01CService],
    }).compile();

    controller = module.get<PpGe01CController>(PpGe01CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

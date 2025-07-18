import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01DController } from './pp-ge-01-d.controller';
import { PpGe01DService } from './pp-ge-01-d.service';

describe('PpGe01DController', () => {
  let controller: PpGe01DController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGe01DController],
      providers: [PpGe01DService],
    }).compile();

    controller = module.get<PpGe01DController>(PpGe01DController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

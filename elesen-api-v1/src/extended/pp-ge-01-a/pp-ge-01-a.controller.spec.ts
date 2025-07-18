import { Test, TestingModule } from '@nestjs/testing';
import { PpGe01AController } from './pp-ge-01-a.controller';
import { PpGe01AService } from './pp-ge-01-a.service';

describe('PpGe01AController', () => {
  let controller: PpGe01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGe01AController],
      providers: [PpGe01AService],
    }).compile();

    controller = module.get<PpGe01AController>(PpGe01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpGk01AController } from './pp-gk-01-a.controller';
import { PpGk01AService } from './pp-gk-01-a.service';

describe('PpGk01AController', () => {
  let controller: PpGk01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGk01AController],
      providers: [PpGk01AService],
    }).compile();

    controller = module.get<PpGk01AController>(PpGk01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

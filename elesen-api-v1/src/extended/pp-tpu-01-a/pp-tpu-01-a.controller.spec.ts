import { Test, TestingModule } from '@nestjs/testing';
import { PpTpu01AController } from './pp-tpu-01-a.controller';
import { PpTpu01AService } from './pp-tpu-01-a.service';

describe('PpTpu01AController', () => {
  let controller: PpTpu01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpTpu01AController],
      providers: [PpTpu01AService],
    }).compile();

    controller = module.get<PpTpu01AController>(PpTpu01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

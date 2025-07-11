import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01AController } from './pp-uv-01-a.controller';
import { PpUv01AService } from './pp-uv-01-a.service';

describe('PpUv01AController', () => {
  let controller: PpUv01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpUv01AController],
      providers: [PpUv01AService],
    }).compile();

    controller = module.get<PpUv01AController>(PpUv01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

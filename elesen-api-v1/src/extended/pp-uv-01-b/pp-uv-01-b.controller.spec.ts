import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01BController } from './pp-uv-01-b.controller';
import { PpUv01BService } from './pp-uv-01-b.service';

describe('PpUv01BController', () => {
  let controller: PpUv01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpUv01BController],
      providers: [PpUv01BService],
    }).compile();

    controller = module.get<PpUv01BController>(PpUv01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

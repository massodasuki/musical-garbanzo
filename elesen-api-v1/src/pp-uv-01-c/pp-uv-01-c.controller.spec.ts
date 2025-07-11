import { Test, TestingModule } from '@nestjs/testing';
import { PpUv01CController } from './pp-uv-01-c.controller';
import { PpUv01CService } from './pp-uv-01-c.service';

describe('PpUv01CController', () => {
  let controller: PpUv01CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpUv01CController],
      providers: [PpUv01CService],
    }).compile();

    controller = module.get<PpUv01CController>(PpUv01CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

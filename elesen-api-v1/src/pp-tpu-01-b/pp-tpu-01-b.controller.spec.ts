import { Test, TestingModule } from '@nestjs/testing';
import { PpTpu01BController } from './pp-tpu-01-b.controller';
import { PpTpu01BService } from './pp-tpu-01-b.service';

describe('PpTpu01BController', () => {
  let controller: PpTpu01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpTpu01BController],
      providers: [PpTpu01BService],
    }).compile();

    controller = module.get<PpTpu01BController>(PpTpu01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

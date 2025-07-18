import { Test, TestingModule } from '@nestjs/testing';
import { PpGk01BController } from './pp-gk-01-b.controller';
import { PpGk01BService } from './pp-gk-01-b.service';

describe('PpGk01BController', () => {
  let controller: PpGk01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpGk01BController],
      providers: [PpGk01BService],
    }).compile();

    controller = module.get<PpGk01BController>(PpGk01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

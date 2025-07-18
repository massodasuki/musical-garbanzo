import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01BController } from './pp-pk-01-b.controller';
import { PpPk01BService } from './pp-pk-01-b.service';

describe('PpPk01BController', () => {
  let controller: PpPk01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPk01BController],
      providers: [PpPk01BService],
    }).compile();

    controller = module.get<PpPk01BController>(PpPk01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01CController } from './pp-pk-01-c.controller';
import { PpPk01CService } from './pp-pk-01-c.service';

describe('PpPk01CController', () => {
  let controller: PpPk01CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPk01CController],
      providers: [PpPk01CService],
    }).compile();

    controller = module.get<PpPk01CController>(PpPk01CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

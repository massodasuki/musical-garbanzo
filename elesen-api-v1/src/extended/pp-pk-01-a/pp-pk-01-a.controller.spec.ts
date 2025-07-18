import { Test, TestingModule } from '@nestjs/testing';
import { PpPk01AController } from './pp-pk-01-a.controller';
import { PpPk01AService } from './pp-pk-01-a.service';

describe('PpPk01AController', () => {
  let controller: PpPk01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPk01AController],
      providers: [PpPk01AService],
    }).compile();

    controller = module.get<PpPk01AController>(PpPk01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

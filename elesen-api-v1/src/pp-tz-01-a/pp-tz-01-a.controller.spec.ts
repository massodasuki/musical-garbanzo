import { Test, TestingModule } from '@nestjs/testing';
import { PpTz01AController } from './pp-tz-01-a.controller';
import { PpTz01AService } from './pp-tz-01-a.service';

describe('PpTz01AController', () => {
  let controller: PpTz01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpTz01AController],
      providers: [PpTz01AService],
    }).compile();

    controller = module.get<PpTz01AController>(PpTz01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv08AController } from './pp-ppv-08-a.controller';
import { PpPpv08AService } from './pp-ppv-08-a.service';

describe('PpPpv08AController', () => {
  let controller: PpPpv08AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv08AController],
      providers: [PpPpv08AService],
    }).compile();

    controller = module.get<PpPpv08AController>(PpPpv08AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

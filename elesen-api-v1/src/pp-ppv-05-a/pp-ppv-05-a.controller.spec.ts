import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv05AController } from './pp-ppv-05-a.controller';
import { PpPpv05AService } from './pp-ppv-05-a.service';

describe('PpPpv05AController', () => {
  let controller: PpPpv05AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv05AController],
      providers: [PpPpv05AService],
    }).compile();

    controller = module.get<PpPpv05AController>(PpPpv05AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

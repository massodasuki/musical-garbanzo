import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv06AController } from './pp-ppv-06-a.controller';
import { PpPpv06AService } from './pp-ppv-06-a.service';

describe('PpPpv06AController', () => {
  let controller: PpPpv06AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv06AController],
      providers: [PpPpv06AService],
    }).compile();

    controller = module.get<PpPpv06AController>(PpPpv06AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

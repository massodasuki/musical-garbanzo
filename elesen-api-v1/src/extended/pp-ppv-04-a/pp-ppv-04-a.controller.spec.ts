import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv04AController } from './pp-ppv-04-a.controller';
import { PpPpv04AService } from './pp-ppv-04-a.service';

describe('PpPpv04AController', () => {
  let controller: PpPpv04AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv04AController],
      providers: [PpPpv04AService],
    }).compile();

    controller = module.get<PpPpv04AController>(PpPpv04AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01AController } from './pp-ppv-01-a.controller';
import { PpPpv01AService } from './pp-ppv-01-a.service';

describe('PpPpv01AController', () => {
  let controller: PpPpv01AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv01AController],
      providers: [PpPpv01AService],
    }).compile();

    controller = module.get<PpPpv01AController>(PpPpv01AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

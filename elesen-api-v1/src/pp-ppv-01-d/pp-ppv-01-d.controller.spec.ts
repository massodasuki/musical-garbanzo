import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01DController } from './pp-ppv-01-d.controller';
import { PpPpv01DService } from './pp-ppv-01-d.service';

describe('PpPpv01DController', () => {
  let controller: PpPpv01DController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv01DController],
      providers: [PpPpv01DService],
    }).compile();

    controller = module.get<PpPpv01DController>(PpPpv01DController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02DController } from './pp-ppv-02-d.controller';
import { PpPpv02DService } from './pp-ppv-02-d.service';

describe('PpPpv02DController', () => {
  let controller: PpPpv02DController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv02DController],
      providers: [PpPpv02DService],
    }).compile();

    controller = module.get<PpPpv02DController>(PpPpv02DController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

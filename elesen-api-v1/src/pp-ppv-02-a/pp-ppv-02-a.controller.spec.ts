import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02AController } from './pp-ppv-02-a.controller';
import { PpPpv02AService } from './pp-ppv-02-a.service';

describe('PpPpv02AController', () => {
  let controller: PpPpv02AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv02AController],
      providers: [PpPpv02AService],
    }).compile();

    controller = module.get<PpPpv02AController>(PpPpv02AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

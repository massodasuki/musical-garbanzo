import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv03AController } from './pp-ppv-03-a.controller';
import { PpPpv03AService } from './pp-ppv-03-a.service';

describe('PpPpv03AController', () => {
  let controller: PpPpv03AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv03AController],
      providers: [PpPpv03AService],
    }).compile();

    controller = module.get<PpPpv03AController>(PpPpv03AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

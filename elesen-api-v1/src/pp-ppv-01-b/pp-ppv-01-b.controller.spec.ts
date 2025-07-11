import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01BController } from './pp-ppv-01-b.controller';
import { PpPpv01BService } from './pp-ppv-01-b.service';

describe('PpPpv01BController', () => {
  let controller: PpPpv01BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv01BController],
      providers: [PpPpv01BService],
    }).compile();

    controller = module.get<PpPpv01BController>(PpPpv01BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

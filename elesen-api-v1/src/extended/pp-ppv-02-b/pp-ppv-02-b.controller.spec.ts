import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02BController } from './pp-ppv-02-b.controller';
import { PpPpv02BService } from './pp-ppv-02-b.service';

describe('PpPpv02BController', () => {
  let controller: PpPpv02BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv02BController],
      providers: [PpPpv02BService],
    }).compile();

    controller = module.get<PpPpv02BController>(PpPpv02BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv05BController } from './pp-ppv-05-b.controller';
import { PpPpv05BService } from './pp-ppv-05-b.service';

describe('PpPpv05BController', () => {
  let controller: PpPpv05BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv05BController],
      providers: [PpPpv05BService],
    }).compile();

    controller = module.get<PpPpv05BController>(PpPpv05BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

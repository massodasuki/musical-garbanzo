import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv06BController } from './pp-ppv-06-b.controller';
import { PpPpv06BService } from './pp-ppv-06-b.service';

describe('PpPpv06BController', () => {
  let controller: PpPpv06BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv06BController],
      providers: [PpPpv06BService],
    }).compile();

    controller = module.get<PpPpv06BController>(PpPpv06BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

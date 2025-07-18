import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv08BController } from './pp-ppv-08-b.controller';
import { PpPpv08BService } from './pp-ppv-08-b.service';

describe('PpPpv08BController', () => {
  let controller: PpPpv08BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv08BController],
      providers: [PpPpv08BService],
    }).compile();

    controller = module.get<PpPpv08BController>(PpPpv08BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

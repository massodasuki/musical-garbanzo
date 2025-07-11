import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv04BController } from './pp-ppv-04-b.controller';
import { PpPpv04BService } from './pp-ppv-04-b.service';

describe('PpPpv04BController', () => {
  let controller: PpPpv04BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv04BController],
      providers: [PpPpv04BService],
    }).compile();

    controller = module.get<PpPpv04BController>(PpPpv04BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

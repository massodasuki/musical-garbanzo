import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv01CController } from './pp-ppv-01-c.controller';
import { PpPpv01CService } from './pp-ppv-01-c.service';

describe('PpPpv01CController', () => {
  let controller: PpPpv01CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv01CController],
      providers: [PpPpv01CService],
    }).compile();

    controller = module.get<PpPpv01CController>(PpPpv01CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

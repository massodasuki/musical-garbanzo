import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv02CController } from './pp-ppv-02-c.controller';
import { PpPpv02CService } from './pp-ppv-02-c.service';

describe('PpPpv02CController', () => {
  let controller: PpPpv02CController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv02CController],
      providers: [PpPpv02CService],
    }).compile();

    controller = module.get<PpPpv02CController>(PpPpv02CController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

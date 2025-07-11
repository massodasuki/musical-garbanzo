import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv03BController } from './pp-ppv-03-b.controller';
import { PpPpv03BService } from './pp-ppv-03-b.service';

describe('PpPpv03BController', () => {
  let controller: PpPpv03BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv03BController],
      providers: [PpPpv03BService],
    }).compile();

    controller = module.get<PpPpv03BController>(PpPpv03BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

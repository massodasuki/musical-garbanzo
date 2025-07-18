import { Test, TestingModule } from '@nestjs/testing';
import { PpKpv03BController } from './pp-kpv-03-b.controller';
import { PpKpv03BService } from './pp-kpv-03-b.service';

describe('PpKpv03BController', () => {
  let controller: PpKpv03BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpKpv03BController],
      providers: [PpKpv03BService],
    }).compile();

    controller = module.get<PpKpv03BController>(PpKpv03BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

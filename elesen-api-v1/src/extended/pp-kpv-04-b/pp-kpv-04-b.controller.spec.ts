import { Test, TestingModule } from '@nestjs/testing';
import { PpKpv04BController } from './pp-kpv-04-b.controller';
import { PpKpv04BService } from './pp-kpv-04-b.service';

describe('PpKpv04BController', () => {
  let controller: PpKpv04BController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpKpv04BController],
      providers: [PpKpv04BService],
    }).compile();

    controller = module.get<PpKpv04BController>(PpKpv04BController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

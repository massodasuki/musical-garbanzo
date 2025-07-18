import { Test, TestingModule } from '@nestjs/testing';
import { PpPpv07Controller } from './pp-ppv-07.controller';
import { PpPpv07Service } from './pp-ppv-07.service';

describe('PpPpv07Controller', () => {
  let controller: PpPpv07Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpPpv07Controller],
      providers: [PpPpv07Service],
    }).compile();

    controller = module.get<PpPpv07Controller>(PpPpv07Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PpTz01Controller } from './pp-tz-01.controller';
import { PpTz01Service } from './pp-tz-01.service';

describe('PpTz01Controller', () => {
  let controller: PpTz01Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpTz01Controller],
      providers: [PpTz01Service],
    }).compile();

    controller = module.get<PpTz01Controller>(PpTz01Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

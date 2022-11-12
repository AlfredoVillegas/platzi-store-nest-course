import { Test, TestingModule } from '@nestjs/testing';
import { AuhtController } from './auht.controller';

describe('AuhtController', () => {
  let controller: AuhtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuhtController],
    }).compile();

    controller = module.get<AuhtController>(AuhtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

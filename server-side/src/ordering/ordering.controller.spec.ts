import { Test, TestingModule } from '@nestjs/testing';
import { OrderingController } from './ordering.controller';
import { OrderingService } from './ordering.service';

describe('OrderingController', () => {
  let controller: OrderingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderingController],
      providers: [OrderingService],
    }).compile();

    controller = module.get<OrderingController>(OrderingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

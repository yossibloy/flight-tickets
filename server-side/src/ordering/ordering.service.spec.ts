import { Test, TestingModule } from '@nestjs/testing';
import { OrderingService } from './ordering.service';

describe('OrderingService', () => {
  let service: OrderingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderingService],
    }).compile();

    service = module.get<OrderingService>(OrderingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

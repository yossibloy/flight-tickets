import { Module, MiddlewareConsumer } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { OrderingController } from './ordering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordering } from './entities/ordering.entity';
import { MiddlewareMiddleware } from './middleware.middleware';

@Module({
  imports:[TypeOrmModule.forFeature([Ordering])],

  controllers: [OrderingController],
  providers: [OrderingService]
})
export class OrderingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(MiddlewareMiddleware)
    .forRoutes('fffffffffffffffff')
  }
}

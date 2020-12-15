import { Module, MiddlewareConsumer } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { OrderingController } from './ordering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordering } from './entities/ordering.entity';
import { MiddlewareMiddleware } from './middleware.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Ordering]),JwtModule.register({secret:"yossi",signOptions: { expiresIn: '60s' }}),

],

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

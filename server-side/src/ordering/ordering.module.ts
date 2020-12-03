import { Module } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { OrderingController } from './ordering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordering } from './entities/ordering.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Ordering])],

  controllers: [OrderingController],
  providers: [OrderingService]
})
export class OrderingModule {}

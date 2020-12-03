import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './entities/passenger.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengersController],
  providers: [PassengersService]
})
export class PassengersModule {}

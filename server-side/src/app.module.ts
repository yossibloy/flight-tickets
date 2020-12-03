import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './flights/entities/flight.entity';
import { PassengersModule } from './passengers/passengers.module';
import { OrderingModule } from './ordering/ordering.module';
import { Passenger } from './passengers/entities/passenger.entity';
import { Ordering } from './ordering/entities/ordering.entity';

@Module({
  imports: [FlightsModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '8657',
    database: 'flights',
    entities: [Flight,Passenger,Ordering],
    synchronize: true,
    logging:true
  }), PassengersModule, OrderingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

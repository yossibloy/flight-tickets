import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passenger } from './entities/passenger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PassengersService {
  constructor(@InjectRepository(Passenger)
  private readonly repo: Repository<Passenger>) {
  }

 async create(createPassengerDto: CreatePassengerDto) {
    
    const passenger = new Passenger()
    passenger.firstname = createPassengerDto.firstname
    passenger.lastname = createPassengerDto.lastname
    passenger.birthDate = createPassengerDto.birthDate
    passenger.sex = createPassengerDto.sex
    passenger.OrderNumber = createPassengerDto.OrderNumber
    passenger.flighitNumber1 = createPassengerDto.flighitNumber1
    passenger.flighitNumber2 = createPassengerDto.flighitNumber2

     await this.repo.save(passenger)  
  }





  findByOrderNumber(q) {
    return this.repo.find({ where: { OrderNumber: q.OrderNumber } });;
  }

  findBynumFlyght(q) {    
    return this.repo.find({ where: { flighitNumber1: q.numFlyght }} || {where: { flighitNumber2: q.numFlyght } })
  }

  remove(id: number) {    
    return this.repo.delete(id);
  }

  removeall(num: string) {    
    return this.repo.delete({OrderNumber:num});
  }
 
}

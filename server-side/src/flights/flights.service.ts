import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {
  constructor(@InjectRepository(Flight)
  private readonly repo: Repository<Flight>) {
  }

  findOne(q) {
    return this.repo.find({ where: { origin: q.origin, target: q.target, depart: q.depart } });;
  }
  findall() {
    return this.repo.find();
  }

  findOnebyid(id) {
    return this.repo.find({ where: { numFlyght: id} });;
  }
 

  async create(createFlightDto: CreateFlightDto) {    
    const flight = new Flight()
    flight.company = createFlightDto.company
    flight.depart = createFlightDto.depart
    flight.duration = createFlightDto.duration
    flight.landing = createFlightDto.landing 
    flight.origin = createFlightDto.origin 
    flight.place = createFlightDto.place 
    flight.prise = createFlightDto.prise 
    flight.takeoff = createFlightDto.takeoff 
    flight.target = createFlightDto.target 
  
    await this.repo.save(flight)
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return this.repo.update(id,updateFlightDto);
  }
  remove(num: number) {    
    return this.repo.delete({numFlyght:num});
  }
}

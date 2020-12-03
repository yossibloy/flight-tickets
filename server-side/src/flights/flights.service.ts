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

  findOnebyid(id) {
    return this.repo.find({ where: { numFlyght: id} });;
  }
 




  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  findAll() {
    return `This action returns all flights`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return this.repo.update(id,updateFlightDto);
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}

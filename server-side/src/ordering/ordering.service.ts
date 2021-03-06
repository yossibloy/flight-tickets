import { Injectable } from '@nestjs/common';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { Ordering } from './entities/ordering.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OrderingService {
  constructor(@InjectRepository(Ordering)
  private readonly repo: Repository<Ordering>,private jwt: JwtService
  ) {
  }

 async create(createOrderingDto: CreateOrderingDto) {    
      const passenger = new Ordering()
      passenger.firstname = createOrderingDto.firstname
      passenger.lastname = createOrderingDto.lastname
      passenger.email = createOrderingDto.email
      passenger.phonNumber = createOrderingDto.phonNumber 
      passenger.OrderNumber = createOrderingDto.OrderNumber 
      passenger.roles = createOrderingDto.roles 
      passenger.flighitNumber1 = createOrderingDto.flighitNumber1 
      passenger.flighitNumber2 = createOrderingDto.flighitNumber2 
    
      await this.repo.save(passenger)
    }

    findall(){
      return this.repo.find()
    }

    findOnebynum(q){
      return this.repo.find({ where:
        [ { flighitNumber1: q.numFlyght },
          { flighitNumber2: q.numFlyght }] })
    }
    
    findOnebyByorder(q) {
      return this.repo.find({ where: { lastname: q.name, OrderNumber: q.OrderNumber } })
      .then(order=>{
        if (order.length>0) {

        let token = this.jwt.sign(q) 
        order[0]['token'] = token
        return order
        }
      })
    }
    removeall(num: string) {    
      return this.repo.delete({OrderNumber:num});
    }

    
  update(id: number, updateFlight) {    
    return this.repo.update(id,updateFlight);
  }
 
}

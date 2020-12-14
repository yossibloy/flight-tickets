import { Controller, Get, Post, Body, Put, Param, Delete, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { GurdGuard } from './gurd.guard';
import { receiveMessageOnPort } from 'worker_threads';

@Controller('ordering')
@UseGuards(GurdGuard)
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) { }

  @Post()
  create(@Body() createOrderingDto: CreateOrderingDto) {
    return this.orderingService.create(createOrderingDto);
  }



  @Get()  
  findFlightsgo(@Query() qq ) { 
    return this.orderingService.findOne(qq);
  }
  @Get("all")  
  findallorders()  { 
    return this.orderingService.findall();
  }

  @Get("Meneger") 
  @SetMetadata('roles', 'admin') 
  sighnMeneger(@Query() b ) {         
    return b;
  }

  @Delete('Delete/:num')
  removeall(@Param('num') num: string) {
     return this.orderingService.removeall(num);
  }
}
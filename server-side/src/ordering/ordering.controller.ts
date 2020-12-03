import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';

@Controller('ordering')
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) { }

  @Post()
  create(@Body() createOrderingDto: CreateOrderingDto) {
    return this.orderingService.create(createOrderingDto);
  }


  @Get()
  findFlightsgo(@Query() qq) {
    return this.orderingService.findOne(qq);
  }

  @Delete('Delete/:num')
  removeall(@Param('num') num: string) {
     return this.orderingService.removeall(num);
  }
}
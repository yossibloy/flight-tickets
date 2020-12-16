import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) { }

  @Post()
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }


  @Get()
  ByOrderNumber(@Query() qq) {
    return this.passengersService.findByOrderNumber(qq);
  }

  @Get("BynumFlyght")
  BynumFlyght(@Query() qq) {  
    return this.passengersService.findBynumFlyght(qq);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.passengersService.findOne(+id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }

  @Delete('Delete/:num')
  removeall(@Param('num') num: string) {
    return this.passengersService.removeall(num);
  }

}

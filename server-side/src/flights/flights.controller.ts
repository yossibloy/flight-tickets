import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) { }

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @Get()
  findFlights(@Query() qq: object) {
    return this.flightsService.findOne(qq);
  }

  @Get("all")
  findallFlights( ) {
    return this.flightsService.findall();
  }
 

  @Get(':id')
  findwonFlights(@Param('id') id:number) {
    return this.flightsService.findOnebyid(id);
  }
 

 

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    console.log(+id, updateFlightDto);
    return this.flightsService.update(+id, updateFlightDto);
    
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.flightsService.remove(id);
  }
}

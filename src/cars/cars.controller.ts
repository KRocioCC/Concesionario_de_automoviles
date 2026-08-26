import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = [
  'Toyota Camry 2020',
  'Honda Civic 2019',
  'Ford Mustang 2021'
  ];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
      console.log('id:', id);
    return this.cars[id];
  }
}

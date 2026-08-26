import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            make: 'Toyota',
            model: 'Camry',
            year: 2020, 
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: 2019,
        },
        {
            id: 3,
            make: 'Ford',
            model: 'Mustang',
            year: 2021,
        }
    ]

    findAll() {
        return this.cars;
    }

    findOne(id: number) {
        return this.cars.find(car => car.id === id);
    }
}

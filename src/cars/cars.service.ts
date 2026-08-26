import { Injectable, NotFoundException } from '@nestjs/common';

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

    createCar(car: any) {
        this.cars.push(car);
        return car;
    }

    findOne(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }   
        return car;
    }   
    
    updateCar(id: number, car: any) {
        const index = this.cars.findIndex(car => car.id === id);
        if (index === -1) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        this.cars[index] = { ...this.cars[index], ...car };
        return this.cars[index];
    }

    deleteCar(id: number) {
        const index = this.cars.findIndex(car => car.id === id);
        if (index === -1) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        const deletedCar = this.cars.splice(index, 1);
        return deletedCar[0];
    }   
    
}

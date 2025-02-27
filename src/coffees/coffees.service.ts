import { Injectable, NotFoundException } from '@nestjs/common';

import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {

     private coffees: Coffee[] = [{
          id: 1,
          name: 'Shipwreck Roast',
          brand: 'Brew Semi-Colon',
          flavors: ['chocolate', 'orange']
     }, {
          id: 2,
          name: 'Macchiato Roast',
          brand: 'Brew Semi-Colon',
          flavors: ['orange']
     }, {
          id: 3,
          name: 'Gear 5 Roast',
          brand: 'Brew Semi-Colon',
          flavors: ['sunflower', 'chocolate']
     }];

     findAll() {
          return this.coffees;
     }

     findOne(id: string) {
          const coffee = this.coffees.find(item => item.id === +id);
          
          if (!coffee) {
               throw new NotFoundException(`Coffee #${id} not found`);
          }

          return coffee;
     }

     create(createCoffeeDto: any) {
          this.coffees.push(createCoffeeDto);
          return createCoffeeDto;
     }

     update(id: string, updateCoffeeDto: any) {
          const existingCoffee = this.findOne(id);
          if (existingCoffee) {
               // update existing coffee
          }
     }

     remove(id: string) {
          const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
          if (coffeeIndex >= 0) {
               this.coffees.splice(coffeeIndex, 1);
          }
     }
}

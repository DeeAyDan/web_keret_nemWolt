import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  //TODO
  getFoodById(id: number):Food {
    return this.getAllFood().find(food => food.id == id)!;
  }

  getAllFoodBySearchTerm(searchTerm: string):Food[] {
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllFoodByTag(tag: string):Food[] {
    if(tag === 'All'){
      return this.getAllFood();
    }
    else {
      return this.getAllFood().filter(food => food.tag?.includes(tag));
    }
  }

    //TODO backend
  getAllTags():Tag[] {
    return [
      {name: 'All', count: 15},
      {name: 'Burrito', count: 1},
      {name: 'Ebéd', count: 7},
      {name: 'Csirke', count: 3},
      {name: 'Vacsora', count: 5},
      {name: 'Kávé', count: 1},
      {name: 'Reggeli', count: 4},
      {name: 'Desszert', count: 2},
      {name: 'Marha', count: 3},
      {name: 'Hamburger', count: 1},
      {name: 'Tészta', count: 1},
      {name: 'Pizza', count: 1},
      {name: 'Leves', count: 2},
      {name: 'Sertés', count: 1},
      {name: 'Hal', count: 1}
    ]
  }

  //TODO backend
  getAllFood():Food[] {
    return [
      {
        id: 1,
        name: 'Csirke Burrito',
        price: 1800,
        cookTime: '25-30 perc',
        favorite: false,
        origins: ['Mexikó'],
        imageUrl: '/assets/food-images/burito-1.jpg',
        tag: ['Burrito', 'Ebéd', 'Csirke', 'Vacsora']
      },
      {
        id: 2,
        name: 'Whole ass csirke',
        price: 2500,
        cookTime: '30-35 perc',
        favorite: false,
        origins: ['Amerika'],
        imageUrl: '/assets/food-images/chicken-1.jpg',
        tag: ['Csirke', 'Ebéd']
      },
      {
        id: 3,
        name: 'Espresso Martini',
        price: 1250,
        cookTime: '5-10 perc',
        favorite: false,
        origins: ['Olasz'],
        imageUrl: '/assets/food-images/coffee-1.jpg',
        tag: ['Kávé', 'Reggeli']
      },
      {
        id: 4,
        name: 'Erdei Gyümölcsös Puding',
        price: 1750,
        cookTime: '15-20 perc',
        favorite: false,
        origins: ['Francia'],
        imageUrl: '/assets/food-images/dessert-1.jpg',
        tag: ['Desszert', 'Ebéd', 'Reggeli']
      },
      {
        id: 5,
        name: 'Fagyis amerikai palacsinta',
        price: 1600,
        cookTime: '15-20 perc',
        favorite: false,
        origins: ['Amerika'],
        imageUrl: '/assets/food-images/dessert-2.jpg',
        tag: ['Desszert', 'Reggeli']
      },
      {
        id: 6,
        name: 'Hamburger',
        price: 2200,
        cookTime: '20-25 perc',
        favorite: true,
        origins: ['Amerika'],
        imageUrl: '/assets/food-images/hamburger-1.jpg',
        tag: ['Hamburger', 'Ebéd', 'Vacsora', 'Marha']
      },
      {
        id: 7,
        name: 'Pestos Penne',
        price: 1900,
        cookTime: '15-20 perc',
        favorite: false,
        origins: ['Olasz'],
        imageUrl: '/assets/food-images/pasta-1.jpg',
        tag: ['Tészta', 'Ebéd', 'Vacsora']
      },
      {
        id: 10,
        name: 'Olasz Csirkés Pizza',
        price: 1500,
        cookTime: '20-25 perc',
        favorite: false,
        origins: ['Olasz'],
        imageUrl: '/assets/food-images/pizza-1.jpg',
        tag: ['Pizza', 'Csirke', 'Vacsora']
      },
      {
        id: 11,
        name: 'Ichiraku Ramen',
        price: 2100,
        cookTime: '15-20 perc',
        favorite: false,
        origins: ['Japán'],
        imageUrl: '/assets/food-images/ramen-1.jpg',
        tag: ['Leves', 'Ebéd', 'Marha']
      },
      {
        id: 12,
        name: 'Sonkás Szendvics',
        price: 800,
        cookTime: '10-15 perc',
        favorite: false,
        origins: ['Amerika'],
        imageUrl: '/assets/food-images/sandwich-1.jpg',
        tag: ['Reggeli', 'Sertés']
      },
      {
        id: 13,
        name: 'Raguleves',
        price: 1600,
        cookTime: '10-15 perc',
        favorite: false,
        origins: ['Francia'],
        imageUrl: '/assets/food-images/soup-1.jpg',
        tag: ['Leves', 'Ebéd', 'Marha']
      },
      {
        id: 15,
        name: 'Sushi tál',
        price: 2900,
        cookTime: '25-30 perc',
        favorite: false,
        origins: ['Japán'],
        imageUrl: '/assets/food-images/sushi-1.jpg',
        tag: ['Hal', 'Vacsora']
      }
    ]
  }
}

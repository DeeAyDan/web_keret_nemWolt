import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():String[] {
    return [
      '/assets/food-images/burito-1.jpg',
      '/assets/food-images/chicken-1.jpg',
      '/assets/food-images/coffee-1.jpg',
      '/assets/food-images/desert-1.jpg',
      '/assets/food-images/desert-2.jpg',
      '/assets/food-images/hamburger-1.jpg',
      '/assets/food-images/pasta-1.jpg',
      '/assets/food-images/pasta-2.jpg',
      '/assets/food-images/pasta-3.jpg',
      '/assets/food-images/pizza-1.jpg',
      '/assets/food-images/ramen-1.jpg',
      '/assets/food-images/sandwich-1.jpg',
      '/assets/food-images/soup-1.jpg',
      '/assets/food-images/soup-2.jpg',
      '/assets/food-images/sushi-1.jpg',
    ]
  }
}

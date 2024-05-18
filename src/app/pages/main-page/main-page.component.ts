import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{

  foods: Food[] = []
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAllFood()
  }
}

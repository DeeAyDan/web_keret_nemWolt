import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../../shared/tags/tags.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.food = this.foodService.getFoodById(params['id']);
      }
    })
  }

}

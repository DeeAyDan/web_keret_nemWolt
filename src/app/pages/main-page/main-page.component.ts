import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{

  foods: Food[] = []
  constructor(private foodService: FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFood().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }
      else{
        this.foods = this.foodService.getAllFood()
      }
    })
  }
}

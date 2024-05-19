import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';
import { TagsComponent } from '../../shared/tags/tags.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagsComponent, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  loggedInUser?: firebase.default.User | null;
  foods: Food[] = []
  constructor(private authService:AuthService, private foodService: FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      }
      else if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
      }
      else{
        this.foods = this.foodService.getAllFood()
      }
    })
    
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.log(error);
    });
  }
}

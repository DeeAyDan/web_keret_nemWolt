import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router} from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../../shared/tags/tags.component';
import { CartService } from '../../services/cart/cart.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent, MatButtonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
              private foodService: FoodService,
              private cartService: CartService,
              private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.food = this.foodService.getFoodById(params['id']);
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigate(['/cart']);
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { Cart } from '../models/Cart';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCounter: number = 0;
  cart!:Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}

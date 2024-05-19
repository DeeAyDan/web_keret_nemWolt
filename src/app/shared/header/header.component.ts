import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { Cart } from '../models/Cart';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatBadgeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  loggedInUser?: firebase.default.User | null;
  cartCounter: number = 0;
  cart!:Cart;

  constructor(private cartService: CartService, private authService: AuthService) { 
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  logout(){
    this.authService.logout().then(() => {
      console.log('logged out');
    }).catch(err => {
      console.log(err);
    });
  }
  
  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.log(error);
    });
  }

}

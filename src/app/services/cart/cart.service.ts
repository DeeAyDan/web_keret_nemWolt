import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(food: Food):void{
    let item = this.cart.items.find(item => item.food.id === food.id);
    if(item){
      this.changeQuantity(food.id, item.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number):void{
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(cartItem){
      cartItem.quantity = quantity;
    }
    return;
  }

  getCart():Cart{
    return this.cart;
  }
}

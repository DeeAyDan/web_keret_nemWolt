import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'search/:searchTerm', component: MainPageComponent},
    {path: 'tag/:tag', component: MainPageComponent},
    {path: 'food/:id', component: FoodPageComponent},
    {path: 'cart', component: CartPageComponent},
];

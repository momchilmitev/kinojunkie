import { Component } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(private cartService: ShoppingCartService) {}

  get cartItems() {
    return this.cartService.cartItems;
  }

  get cartAmount() {
    return this.cartService.amount;
  }
}

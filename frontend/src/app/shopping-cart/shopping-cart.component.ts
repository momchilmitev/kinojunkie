import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit (): void {
    this.cartService.invokeStripe();
  }

  get cartItems() {
    return this.cartService.cartItems;
  }

  get cartAmount() {
    return this.cartService.amount;
  }

  pay(amount: any) {
    this.cartService.makePayment(amount);
  }
}

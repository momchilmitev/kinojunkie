import { Component, Input } from '@angular/core';
import { Movie } from '@types';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() movie!: Movie;

  constructor(private cartService: ShoppingCartService) {}

  removeFromCart(item: Movie) {
    this.cartService.removeItem(item);
  }

  inc(item: Movie) {
    this.cartService.increaseQty(item);
  }

  dec(item: Movie) {
    this.cartService.decreaseQty(item);
  }
}

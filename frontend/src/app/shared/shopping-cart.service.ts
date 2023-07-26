import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Movie } from '../types/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: Movie[] = [];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ShoppingCartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addItem(product: Movie) {
    const foundProduct = this.items.find(i => i._id === product._id);
    
    if (foundProduct) {
      this.items = [...this.items.map(i => {
        if (i._id === foundProduct._id) {
          // @ts-ignore
          return ({ ...i, qty: foundProduct.qty + 1 })
        }

        return i
      })]
    } else {
      this.items.push({ ...product, qty: 1 });
    }
  }

  removeItem(product: Movie) {
    this.items = [ ...this.items.filter(i => i._id !== product._id) ]
  }

  increaseQty(product: Movie) {
    this.items = [...this.items.map(i => {
      if (i._id === product._id) {
        // @ts-ignore
        return ({ ...i, qty: product.qty + 1 })
      }

      return i
    })]
  }

  decreaseQty(product: Movie) {
    if (product.qty === 0) {
      this.removeItem(product)
    } else {
      this.items = [...this.items.map(i => {
        if (i._id === product._id) {
          // @ts-ignore
          return ({ ...i, qty: product.qty - 1 })
        }
  
        return i
      })]
    }
  }

  get cartCount() {
    return this.items.length;
  }

  get cartItems() {
    return this.items;
  }

  get amount() {
    return this.items.reduce((acc, i) => {
      if (i.qty) {
        return acc + (Number(i.price) * i.qty)
      } else {
        return acc + Number(i.price)
      }
    }, 0);
  }

  clearCart() {
    this.items = [];
  }
}

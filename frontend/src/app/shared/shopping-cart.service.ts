import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Movie } from '../types/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: Movie[] = [];
  paymentHandler: any = null;

  constructor(
    private dialog: MatDialog,
  ) {}

  openDialog() {
    this.dialog.open(ShoppingCartComponent);
  }

  closeDialog() {
    this.dialog.closeAll()
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

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KYcmBCKmuhJOPPhczQzRg8POfoOuW5Q0gvcIfiEJFD1lYr3oFG8CK5HZSfCLb5Tek91Q8u1kAPIwVFlN6I1UGQp00D0LbKpxs',
      locale: 'auto',
      token: (stripeToken: any) => {
        this.closeDialog()
        this.clearCart()
      },
    });
    paymentHandler.open({
      name: 'Test user',
      description: 'Movie order',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KYcmBCKmuhJOPPhczQzRg8POfoOuW5Q0gvcIfiEJFD1lYr3oFG8CK5HZSfCLb5Tek91Q8u1kAPIwVFlN6I1UGQp00D0LbKpxs',
          locale: 'auto',
          token: function (stripeToken: any) {},
        });
      };
      window.document.body.appendChild(script);
    }
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ShoppingCartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

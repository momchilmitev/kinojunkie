import { Component, EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
  animations: [
    trigger('bubble', [
      state('start', style({
        transform: 'translateY(-37px)',
        opacity: 0,
      })),
      state('end', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      transition('* => start', [
        animate('0.4s')
      ]),
    ])
  ],
})
export class AddToCartButtonComponent {
  isBubbling = false;
  @Output() clicked = new EventEmitter();

  onClick() {
    this.isBubbling = true;
    this.clicked.emit()
  }
}

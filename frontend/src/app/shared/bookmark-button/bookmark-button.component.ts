import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.scss']
})
export class BookmarkButtonComponent {
  @Input() isBookmarked!: boolean;
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit()
  }

}

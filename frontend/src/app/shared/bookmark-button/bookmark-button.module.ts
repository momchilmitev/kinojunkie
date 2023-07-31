import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkButtonComponent } from './bookmark-button.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    BookmarkButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BookmarkButtonComponent
  ]
})
export class BookmarkButtonModule { }

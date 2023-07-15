import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module'
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NavigationComponent,
  ]
})
export class NavigationModule { }

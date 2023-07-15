import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { NavigationModule } from '../../core/navigation/navigation.module'
import { GridComponent } from './grid.component'


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavigationModule,
    RouterModule,
  ],
  exports: [
    GridComponent,
  ]
})
export class GridModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { GridComponent } from './grid.component'


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GridComponent,
  ]
})
export class GridModule { }

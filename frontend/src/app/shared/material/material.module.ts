import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

const materialModules: any[] = [MatGridListModule];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }

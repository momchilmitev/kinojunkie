import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { recordResolver } from '../resolvers/record';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    resolve: { record: recordResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }

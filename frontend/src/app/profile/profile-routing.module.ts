import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../guards/auth';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

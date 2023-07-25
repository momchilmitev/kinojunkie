import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'bookmarks', loadChildren: () => import('./bookmarks/bookmarks.module').then(m => m.BookmarksModule) },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

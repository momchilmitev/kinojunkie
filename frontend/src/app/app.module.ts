import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { GridModule } from './core/grid/grid.module'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from './shared/card/card.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesEffects } from './shared/stores/movies/effects';
import { AuthEffects } from './shared/stores/auth/effects';
import { reducers as MoviesReducers } from './shared/stores/movies/reducers';
import { reducers as AuthReducers } from './shared/stores/auth/reducers';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GridModule,
    HttpClientModule,
    CardModule,
    StoreModule.forRoot({
      'movies': MoviesReducers,
      'auth': AuthReducers,
    }, {}),
    EffectsModule.forRoot([MoviesEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@types';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../shared/stores/auth/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, errorSelector } from '../shared/stores/auth/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor (private fb: FormBuilder, private strore: Store<AppState>, private router: Router) {
    this.isLoading$ = this.strore.pipe(select(isLoadingSelector));
    this.error$ = this.strore.pipe(select(errorSelector));
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    this.strore.dispatch(AuthActions.login(this.loginForm.value));
    this.router.navigate(['/']);
    this.loginForm.reset();
  }
}

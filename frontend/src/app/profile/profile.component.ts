import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppState } from '@types';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../shared/stores/auth/actions';
import { Observable, Subscription } from 'rxjs';
import { isLoadingSelector, errorSelector, userSelector } from '../shared/stores/auth/selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  })
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  user$!: Observable<any>;
  userSubscription$!: Subscription;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }

  ngOnInit (): void {
    this.userSubscription$ = this.user$.subscribe(u => {
      this.profileForm.setValue({
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email
      });
    })
  }

  get firstName() {
    return this.profileForm.controls.firstName;
  }
  get lastName() {
    return this.profileForm.controls.lastName;
  }

  get email() {
    return this.profileForm.controls.email;
  }

  update() {
    this.store.dispatch(AuthActions.updateUser(this.profileForm.value))
  }

  ngOnDestroy (): void {
    this.userSubscription$.unsubscribe();
  }
}

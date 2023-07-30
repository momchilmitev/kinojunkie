import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { repeatePasswordValidator } from '../shared/directives/repeatePassword.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  registerForm: any = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  },
  { validators: [repeatePasswordValidator()]
  })
  isLoading = false;
  registerSubscription!: Subscription;
  // currentErr = '';

  constructor (
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private errorAlert: MatSnackBar
  ) {}

  get firstName() {
    return this.registerForm.controls.firstName;
  }
  get lastName() {
    return this.registerForm.controls.lastName;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  get confirmPassword() {
    return this.registerForm.controls.confirmPassword;
  }

  register () {
    this.isLoading = true;
    this.registerSubscription = this.authService.register(this.registerForm.value).subscribe(
      r => {
        this.isLoading = false;
        this.router.navigate(['/login']);
        this.registerForm.reset();
      },
      ({ error }) => {
        this.isLoading = false
        // this.currentErr = error.message;
        this.errorAlert.open(error.message, '', { duration: 10000, panelClass: ['error-alert'] })
      },
      () => {}
    )
  }

  ngOnDestroy (): void {
    if (this.registerSubscription) {
      this.registerSubscription.unsubscribe()
    }
  }

}

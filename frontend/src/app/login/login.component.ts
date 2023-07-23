import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

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
  isLoading = false;

  constructor (private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(r => {
      console.log(r);
      this.isLoading = false;
      this.router.navigate(['/']);
      this.loginForm.reset();
    })
  }
}

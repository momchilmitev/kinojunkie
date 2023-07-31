import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://64.225.108.81:3000/auth/register', userData)
  }

  login(userData: any) {
    return this.http.post<{access_token: string}>('https://cors-anywhere.herokuapp.com/http://64.225.108.81:3000/auth/login', userData)
  }

  updateUser(userData: any) {
    return this.http.put('https://cors-anywhere.herokuapp.com/http://64.225.108.81:3000/auth/profile', userData)
  }
}

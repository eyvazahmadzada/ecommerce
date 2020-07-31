import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface myData {
  id_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient, private router: Router) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn','true');
  }
  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username, password) {
    return this.http.post<myData>('https://gateway.mrbee.az/api/authenticate/e-commerce/customer', {
      username,
      password
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    localStorage.setItem('loggedIn','false');
  }
}

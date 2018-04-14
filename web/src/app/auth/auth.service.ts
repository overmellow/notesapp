import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../users/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  currentUser: User;
  redirectUrl: String;

  constructor(
    private httpClient: HttpClient
  ) { }

  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setAuthToken(token) {
    localStorage.setItem('token', token);
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  getAuthorizationToken() {
    return 'Bearer ' + this.getAuthToken();
  }

  signup(signupUser) {
    return this.httpClient.post('http://192.168.31.129:8080/auth/signup', signupUser, httpOptions);
  }

  login(loginUser) {
    return this.httpClient.post('http://192.168.31.129:8080/auth/login', loginUser, httpOptions);
  }

  logout(): void {
    delete this.currentUser;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwtToken');
  }

}

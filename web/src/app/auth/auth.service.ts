import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../users/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

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
    localStorage.setItem('jwtToken', token);
  }

  getAuthToken() {
    return localStorage.getItem('jwtToken');
  }

  getAuthorizationToken() {
    return 'Bearer ' + this.getAuthToken();
  }

  signup(signupUser) {
    return this.httpClient.post('auth/signup', signupUser, httpOptions);
  }

  login(loginUser) {
    return this.httpClient.post('auth/login', loginUser, httpOptions);
  }

  logoute(logoutUser) {
    return this.httpClient.post('logout', logoutUser, httpOptions);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwtToken');
  }

}

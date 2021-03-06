import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { User } from '../users/user';
import { Role } from './role';
import { CurrentUser } from './currentUser';

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

  checkCurrentUserHasRole(role: string) {
    const currentUser: CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    const roles: Role[] = currentUser['roles'];
    let hasRole = false;

    roles.forEach(r => {
      if (r.role === role) {
        hasRole = true;
        return true;
      }
    });
    return hasRole;
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
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post('login', loginUser, { observe: 'response', headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwtToken');
  }

  getAuthenticatedUser() {
    return this.httpClient.get('auth/authenticated');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('api/users');
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>('api/users/' + id);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>('api/users', user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    return this.httpClient.put<User>('api/users/' + id, user, httpOptions);
  }

  deleteUser(user: User | number) {
    const id = typeof user === 'number' ? user : user.id;
    return this.httpClient.delete<User>('api/users/' + id,  httpOptions);
  }
}

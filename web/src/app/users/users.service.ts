import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://192.168.31.129:8080/users');
  }

}

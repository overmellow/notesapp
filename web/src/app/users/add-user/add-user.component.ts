import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  constructor(
    private location: Location,
    private userService: UsersService
  ) { }

  addUser(username: string, password: string): void {
    username = username.trim();
    if (!username && !password) { return; }

    const tempuser = { 'id': null, 'username': username, 'password': password };

    this.userService.addUser(tempuser)
      .subscribe(user => { this.goBack(); } );
  }

  goBack(): void {
    this.location.back();
  }

}

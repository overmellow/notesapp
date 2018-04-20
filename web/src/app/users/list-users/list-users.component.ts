import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UsersService } from '../users.service';

import { User } from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent implements OnInit {
  users: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
}

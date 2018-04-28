import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../users.service';

import { User } from '../user';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html'
})
export class DetailUserComponent implements OnInit {
  user: User = {id: null, username: '', password: ''};
  id;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser(this.id);
  }

  getUser(id: number): void {
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  updateUser(user: User): void {
    this.usersService.updateUser(user)
      .subscribe(data => this.goBack());
  }

  deleteUser(user: User): void {
    this.usersService.deleteUser(user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

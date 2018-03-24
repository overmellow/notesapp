import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    DetailUserComponent,
    ListUsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }

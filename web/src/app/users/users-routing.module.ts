import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '',  component: ListUsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'detail/:id', component: DetailUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }

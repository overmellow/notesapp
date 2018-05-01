import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverComponent } from './recover/recover.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login',  component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'recover', component: RecoverComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'logout', component: LogoutComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }

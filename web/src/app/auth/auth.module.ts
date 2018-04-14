import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './/auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverComponent } from './recover/recover.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    RecoverComponent,
    LogoutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

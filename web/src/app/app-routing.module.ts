import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'users', component: AdminLayoutComponent, loadChildren: './users/users.module#UsersModule'},
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'auth/login', component: LoginComponent, pathMatch: 'full'}
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

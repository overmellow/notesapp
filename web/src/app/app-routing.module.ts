import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent},
  { path: 'users', component: AdminLayoutComponent, loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuardService]},
  { path: 'notes', component: AppLayoutComponent, loadChildren: './notes/notes.module#NotesModule', canActivate: [AuthGuardService]},
  { path: 'auth', component: SiteLayoutComponent, loadChildren: './auth/auth.module#AuthModule'},
  // {
  //   path: '',
  //   component: SiteLayoutComponent,
  //   children: [
  //     { path: 'auth', component: AuthComponent, pathMatch: 'full'}
  //   ]
  // },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class AppRoutingModule {}

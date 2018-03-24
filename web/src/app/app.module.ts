import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

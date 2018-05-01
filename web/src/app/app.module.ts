import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TokenInterceptor } from './token.interceptor';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { LandingComponent } from './landing/landing.component';
import { AuthService } from './auth/auth.service';
import { ServerService } from './server.service';
import { FilesService } from './files.service';
import { WindowRefService } from './window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    LandingComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ServerService,
    FilesService,
    WindowRefService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

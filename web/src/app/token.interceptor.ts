import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { ServerService } from './server.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private serverService: ServerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const serverUrl = this.serverService.getServerUrl();

    // Get the auth token from the service.
    const authToken = this.authService.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
      url: serverUrl + req.url
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}

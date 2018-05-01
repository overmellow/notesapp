import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AdminRoleGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkRole(url);
  }

  checkRole(url: string): boolean {
    if (this.authService.checkCurrentUserHasRole('ADMIN')) { return true; }

    return false;
  }
}

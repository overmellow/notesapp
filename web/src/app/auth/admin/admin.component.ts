import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    if (!username && !password) { return; }

    const loginUser = { 'username': username, 'password': password };


    this.authService.login(loginUser)
      .subscribe(res => {
        const jwtToken = this.cleanToken(res.headers.get('Authorization'));
        this.authService.setAuthToken(jwtToken);
        this.authService.getAuthenticatedUser()
          .subscribe(data => {
            this.authService.setCurrentUser(data);
            this.router.navigate(['/users']);
          });

      });
  }

  cleanToken(authorizationToken: string) {
    return authorizationToken.substring(7, authorizationToken.length);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CurrentUser } from '../currentUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        // const currentUser = {id: data['id'], username: data['username'], password: '', jwtToken: data['jwtToken']};
        // this.authService.setCurrentUser(currentUser);
        // this.authService.setCurrentUser(data['user']);
        // this.authService.setAuthToken(data['jwtToken']);
        this.authService.setAuthToken(jwtToken);
        this.authService.getAuthenticatedUser()
          .subscribe(data => {
            this.authService.setCurrentUser(data);
            this.router.navigate(['/notes']);
          });

      });
  }


  cleanToken(authorizationToken: string) {
    return authorizationToken.substring(7, authorizationToken.length);
  }
}



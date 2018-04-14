import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
      .subscribe(data => {
        this.authService.setCurrentUser(data['user']);
        this.authService.setAuthToken(data['jwtToken']);
        this.router.navigate(['/notes']);
      });
  }

}

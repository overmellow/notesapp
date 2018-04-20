import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(username: String, password: String) {
    if (!username && !password) { return; }

    const signupUser = { 'username': username, 'password': password };

    this.authService.signup(signupUser)
      .subscribe(() => this.router.navigate(['/auth/login'])
    );
  }

}

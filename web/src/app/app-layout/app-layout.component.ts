import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CurrentUser } from '../auth/currentUser';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  currentUser: CurrentUser;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
}

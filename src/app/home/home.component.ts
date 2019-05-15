import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.getLoggedIn();
  }

  onLoadServers(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'],
      {
        queryParams: {
          allowEdit: '1'
        },
        fragment: 'loading'
      });
  }
  onLogin() {
    this.authService.login();
    this.loggedIn = this.authService.getLoggedIn();

  }
  onLogout() {
    this.authService.logout();
    this.loggedIn = this.authService.getLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userOneActivated = false;
  userTwoActivated = false;
  constructor(
    private usersService: UsersService
  ) { }
  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if ( id === 1) {
          this.userOneActivated = true;
        } else if ( id === 2) {
          this.userTwoActivated = true;
        }
      }
    );
  }
}

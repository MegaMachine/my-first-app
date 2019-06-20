import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          // console.log(response.type === HttpEventType.Sent);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
    this.router.navigate(['/recipes']);
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

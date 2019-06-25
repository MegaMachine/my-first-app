import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.authState = this.store.select('auth');
  }
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
}

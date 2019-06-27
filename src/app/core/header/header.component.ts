import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as firebase from 'firebase';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../main/recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.authState = this.store.select('auth');
  }
  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }
  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
    this.router.navigate(['/recipes']);
  }
  onLogout() {
    firebase
      .auth()
      .signOut();
    this.store.dispatch(new AuthActions.Logout());
  }
}

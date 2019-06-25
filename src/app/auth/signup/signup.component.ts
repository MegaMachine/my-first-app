import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import * as fromApp from '../../store/app.reducers';
import * as AuthAction from './../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthAction.TrySignup({username: email, password: password}));
  }
}

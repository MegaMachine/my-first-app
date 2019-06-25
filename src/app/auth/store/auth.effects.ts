import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthAction from './auth.actions';
@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.pipe(ofType(AuthAction.TRY_SIGNUP));
  constructor(
    private actions$: Actions
  ) {}
}

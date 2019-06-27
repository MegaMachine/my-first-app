import { Router } from '@angular/router';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
@Injectable()
export class AuthEffects {
  @Effect() //{dispatch: false}
  authSignup = this.actions$
    .pipe(
      ofType(AuthActions.TRY_SIGNUP),
      map((action: AuthActions.TrySignup) => {
        return action.payload;
      }),
      switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken(true));
      }),
      mergeMap((token: string) => {
        return [
          {
            type: AuthActions.SIGNUP
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      })
    );
  @Effect()
  authSignin = this.actions$
    .pipe(
      ofType(AuthActions.TRY_SIGNIN),
      map((action: AuthActions.TrySignin) => {
        return action.payload;
      }),
      switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password)
          // .then((response) => console.log(response))
          .catch(error => console.log(error.message)));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken(true));
      }),
      mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      })
    );
  @Effect({dispatch: false})
  authLogout = this.actions$
    .pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        this.router.navigate(['/']);
      })
    );
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}

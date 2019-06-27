import { Store } from '@ngrx/store';
import { Recipe } from './../recipe.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { tap, switchMap, map, take, withLatestFrom } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .pipe(
      ofType(RecipeActions.FETCH_RECIPES),
      switchMap((action: fromRecipe.FeatureState) => {
        return this.httpClient.get<Recipe[]>('https://learning-http-request.firebaseio.com/recipes.json', {
          observe: 'body', // body, response
          responseType: 'json', //blob, text, json
        });
      }),
      map(
        (recipes: Recipe[]) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          };
        }
      )
    );
  @Effect({dispatch: false})
  recipeStore = this.actions$
    .pipe(
      ofType(RecipeActions.STORE_RECIPES),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([action, state]) => {
        const req = new HttpRequest(
          'PUT',
          'https://learning-http-request.firebaseio.com/recipes.json',
          state.recipes,
          { reportProgress: true }
        );
        return this.httpClient.request(req);
      })
    );
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.FeatureState>
  ) {}
}

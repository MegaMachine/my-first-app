import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../main/recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'dearer');
    const params = new HttpParams().set('auth', token)
    return this.httpClient.put(
      'https://learning-http-request.firebaseio.com/recipes.json' + token,
      this.recipeService.getRecipes(),
      {
        observe: 'body', //events, body
        params: params
        // headers: headers
      }
    );
  }
  getRecipes() {
    const token = this.authService.getToken();
    // return this.httpClient.get<Recipe[]>('https://learning-http-request.firebaseio.com/recipes.json?auth=' + token)
    return this.httpClient.get<Recipe[]>('https://learning-http-request.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body', // body, response
      responseType: 'json', //blob, text, json
    })
      .pipe(
        map(
          (recipes) => {
            // console.log(response);
            // const recipes: Recipe[] = response;
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            console.log(recipes);
            return recipes;
          }
        )
      )
      .subscribe(
        (response: any) => {
          console.log(response)
          const recipes: Recipe[] = response;
          this.recipeService.setRecipes(recipes);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

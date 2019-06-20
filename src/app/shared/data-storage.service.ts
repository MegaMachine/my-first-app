import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.put('https://learning-http-request.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
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
            console.log(recipes);
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return [];
          }
        )
      )
      .subscribe(
        (response: any) => {
          const recipes: Recipe[] = response;
          this.recipeService.setRecipes(recipes);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

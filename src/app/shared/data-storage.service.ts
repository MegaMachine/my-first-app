import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../main/recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://learning-http-request.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://learning-http-request.firebaseio.com/recipes.json?auth=' + token)
      .pipe(
        map(
          (response: any) => {
            const recipes: Recipe[] = response;
            for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;
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

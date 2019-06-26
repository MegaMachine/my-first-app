import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../main/recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
  ) {}

  storeRecipes() {
    const req = new HttpRequest(
      'PUT',
      'https://learning-http-request.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
      }
    );
    return this.httpClient.request(req);
  }
  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://learning-http-request.firebaseio.com/recipes.json', {
      observe: 'body', // body, response
      responseType: 'json', //blob, text, json
    })
      .pipe(
        map(
          (recipes) => {
            for (const recipe of recipes) {
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

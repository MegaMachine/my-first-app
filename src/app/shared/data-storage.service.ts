import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../main/recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    return this.http.put('https://learning-http-request.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  getRecipes() {
    return this.http.get('https://learning-http-request.firebaseio.com/recipes.json')
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

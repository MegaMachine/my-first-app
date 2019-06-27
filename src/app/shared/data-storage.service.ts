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

  }
}

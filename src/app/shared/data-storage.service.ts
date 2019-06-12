import { RecipeService } from './../main/recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    console.log('put');
    return this.http.put('http://localhost:5000/recipes', this.recipeService.getRecipes());
  }
}

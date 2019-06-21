import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor() {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }
}

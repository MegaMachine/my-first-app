import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Sendwitch',
      'Test1',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Breat', 1)
      ]
    ),
    new Recipe(
      'Fry Potatos',
      'Test2',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519654520-delish-glazed-carrots-1.jpg?crop=1.0xw:1xh;center,top&resize=480:*',
      [
        new Ingredient('Potato', 5),
        new Ingredient('Oil', 1)
      ]
    ),
    new Recipe(
      'Chiken',
      'Test3',
      'https://cdn.vox-cdn.com/thumbor/haPXSPnaeo-UIsaM-G3WLvNIUgc=/0x0:2400x1603/1200x675/filters:focal(1008x610:1392x994)/cdn.vox-cdn.com/uploads/chorus_image/image/58071251/NS019342.0.jpg',
      [
        new Ingredient('Chiken', 1)
      ]
    )
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }
}

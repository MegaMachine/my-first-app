import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
      if (!this.recipe) {
        this.router.navigate(['/recipes']);
      }
    });
  }
  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

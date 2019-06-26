import * as RecipeActions from './../store/recipe.actions';
import { take } from 'rxjs/operators';
import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState>
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipeState = this.store.select('recipes');

      // if (!this.recipe) {
      //   this.router.navigate(['/recipes']);
      // }
    });
  }
  onAddToShoppingList() {
    this.store.select('recipes')
      .pipe(
        take(1)
      )
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
      });
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  }
  onDeleteRecipe() {
    this.store.dispatch( new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}

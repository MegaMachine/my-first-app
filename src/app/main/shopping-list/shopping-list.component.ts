import { Subscription, Observable } from 'rxjs';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}

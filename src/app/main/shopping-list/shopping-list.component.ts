import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
    // console.log(typeof this.shoppingListService.getIngredients());
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

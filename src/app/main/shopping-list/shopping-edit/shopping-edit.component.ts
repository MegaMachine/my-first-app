import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}

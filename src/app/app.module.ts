import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { RecipeListComponent } from './main/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './main/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './main/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './main/shopping-list/shopping-edit/shopping-edit.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

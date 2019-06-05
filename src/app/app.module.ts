import { RecipeService } from './main/recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './main/shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { RecipeListComponent } from './main/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './main/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './main/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './main/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './main/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './main/recipes/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

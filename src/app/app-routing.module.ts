import { RecipeEditComponent } from './main/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './main/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './main/recipes/recipe-start/recipe-start.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './main/recipes/recipes.component';
import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes )],
  exports: [RouterModule],

})

export class AppRoutingModule {

}

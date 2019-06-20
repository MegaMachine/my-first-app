import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './main/recipes/recipes.module#RecipesModule'}, //lazy  load module
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],

})

export class AppRoutingModule {

}

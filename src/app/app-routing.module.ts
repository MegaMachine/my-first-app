
import { SignupComponent } from './auth/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes )],
  exports: [RouterModule],

})

export class AppRoutingModule {

}

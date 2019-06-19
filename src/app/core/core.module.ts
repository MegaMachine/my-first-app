import { NgModule } from '@angular/core';

import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from '../main/recipes/recipe.service';
import { ShoppingListService } from '../main/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}

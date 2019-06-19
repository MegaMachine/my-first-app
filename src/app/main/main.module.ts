import { AppRoutingModule } from './../app-routing.module';
import { MainComponent } from './main.component';
import { RecipesModule } from './recipes/recipes.module';
import { NgModule } from "@angular/core";
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    ShoppingListModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    MainComponent
  ]
})

export class MainModule {}

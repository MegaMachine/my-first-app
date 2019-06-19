import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './main/recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './main/shopping-list/shopping-list.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListModule } from './main/shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //Custom modules
    SharedModule,
    AuthModule,
    CoreModule,
    MainModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

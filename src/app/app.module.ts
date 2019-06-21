import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //Custom modules
    SharedModule,
    AuthModule,
    CoreModule,
    MainModule,
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

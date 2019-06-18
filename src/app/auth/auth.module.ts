import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
